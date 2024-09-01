import { CharStream, CommonTokenStream, ParseTreeWalker } from 'antlr4'

import TorchLexer from './gen/TorchLexer'
import TorchListener from './gen/TorchListener'
import TorchParser, {
	ExprContext,
	FunctionCallContext,
	FunctionDeclarationContext,
	IfStatementContext,
	LetAssignmentContext,
	LetDeclarationContext,
	ProgContext,
	ReturnStatementContext,
	WhileStatementContext
} from './gen/TorchParser'

class TorchTreeWalker extends TorchListener {
	private output: string = ''
	private locals: { [key: string]: string[] } = { '~global': [] } // здесь, ключь - это названи функции
	private currentFunction: string = '~global'
	private functions: string[] = []
	private instructions: string[] = [] // инструкции - это сгенерированный webAssembly код
	private exprStack: string[] = [] // стэк значений
	private blockStack: string[][] = [] // облость видимость блока

	enterProg = (_ctx: ProgContext) => {
		this.instructions = []
	}

	exitLetDeclaration = (ctx: LetDeclarationContext) => {
		if (ctx.ID()) {
			// ID - имя переменной
			this.locals[this.currentFunction].push(
				`(local $${ctx.ID().getText()} f32)`
			)
		}
		if (ctx.expr()) {
			const expr = this.exprStack.pop() // если есть присвоение переменной, то мы достаем это значение из стэка
			this.instructions.push(`(local.set $${ctx.ID().getText()} ${expr})`)
		}
	}

	exitLetAssignment = (ctx: LetAssignmentContext) => {
		const expr = this.exprStack.pop()
		this.instructions.push(`(local.set $${ctx.ID().getText()} ${expr})`)
	}

	enterIfStatement = (_ctx: IfStatementContext) => {
		// для вложеных условий
		this.blockStack.push(this.instructions) // инструкции, которые уже прочитаны, добавляем в блок
		this.instructions = [] // и очищаем для дальнейших инструкций
	}

	exitIfStatement = (_ctx: IfStatementContext) => {
		const condition = this.exprStack.pop() // достаем условие
		const thenBlock = this.instructions.join('\n') // что должно выполниться
		this.instructions = this.blockStack.pop()! // возвращаем инструкции, которые мы считывали до if, обратно на стэк
		this.instructions.push(`(if ${condition} (then ${thenBlock}))`)
	}

	enterWhileStatement = (_ctx: WhileStatementContext) => {
		this.blockStack.push(this.instructions)
		this.instructions = []
	}

	exitWhileStatement = (_ctx: WhileStatementContext) => {
		const condition = this.exprStack.pop()
		const bodyBlock = this.instructions.join('\n')
		this.instructions = this.blockStack.pop()!
		this.instructions.push(`(loop \n${bodyBlock}\n(br_if 0 ${condition}))`)
	}

	// enterFunctionDeclaration = (ctx: FunctionsDeclarationsContext) => {
	// 	this.blockStack.push(this.instructions)
	// 	this.instructions = []
	// 	this.currentFunction = ctx.ID(0).getText()
	// 	this.locals[this.currentFunction] = []
	// }

	// exitFunctionDeclaration = (ctx: FunctionsDeclarationsContext) => {
	// 	const functionName = ctx.ID(0).getText()
	// 	const locals = this.locals[this.currentFunction].join('\n')
	// 	const params = ctx
	// 		.ID_list()
	// 		.slice(1)
	// 		.map(id => `(param $${id.getText()} f32)`)
	// 		.join(' ')

	// 	const bodyBlock = this.instructions.join('\n')

	// 	this.functions.push(
	// 		`(func $${functionName} ${params} (result f32)\n${locals}\n${bodyBlock})`
	// 	)

	// 	this.instructions = this.blockStack.pop()!
	// 	this.currentFunction = '~global'
	// }

	// exitFunctionCall = (ctx: FunctionCallContext) => {
	// 	const functionName = ctx.ID().getText()
	// 	const args = ctx
	// 		.expr_list()
	// 		.map(arg =>
	// 			arg.INT()
	// 				? `(f32.const ${arg.INT().getText()})`
	// 				: `(local.get $${arg.ID().getText()})`
	// 		)
	// 	this.exprStack.push(`(call $${functionName} ${args.join(' ')})`)
	// }

	enterFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
		const funcName: string = ctx.ID().getText()
		this.currentFunction = funcName
		this.locals[funcName] = [] // инициализируем локальные переменные для функции
		this.blockStack.push(this.instructions) // сохраняем все интрукции до объявления функции
		this.instructions = []
		console.log(`Func declaration: ${funcName}`)
	}

	exitFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
		const funcName: string = ctx.ID().getText()
		let wasmCode = `( func $${funcName}`

		const params = ctx.parameters()?.ID_list() || []
		params.forEach(param => {
			wasmCode += `(param $${param.getText()} f32)`
		})

		wasmCode += ` (result f32)`

		const locals = this.locals[this.currentFunction].join('\n')
		wasmCode += `${locals}`

		const funcBody = this.instructions.join('\n')
		wasmCode += `\n${funcBody}`
		wasmCode += `)`

		this.functions.push(wasmCode)
		this.instructions = this.blockStack.pop()!
		this.currentFunction = '~global'

		console.log(`Generated WebAssembly code for function ${funcName}`)
	}

	enterFunctionCall = (ctx: FunctionCallContext) => {
		const funcName: string = ctx.ID().getText()
		// let wasmCode = `(call $${funcName}`

		// const args =
		// 	ctx
		// 		.arguments()
		// 		?.expr_list()
		// 		.map(exprCtx => this.evaluateExpression(exprCtx)) || []

		const argsCont = ctx.arguments().expr_list().length
		const args: string[] = []

		for (let i = 0; i < argsCont; i++) {
			let exprVal = this.exprStack.pop()
			if (exprVal !== undefined) {
				args.unshift(exprVal)
			}
		}

		// wasmCode += `) \n`
		this.exprStack.push(`(call $${funcName} ${args.join(' ')})`)

		console.log(
			`Generated WebAssembly call for function ${funcName} with args: ${args.join(
				', '
			)}`
		)
	}

	exitReturnExpr = (ctx: ReturnStatementContext) => {
		const expr = this.exprStack.pop()
		this.instructions.push(`${expr}`)
	}

	// private evaluateExpression = (ctx: ExprContext): string => {
	// 	if (ctx.functionCall()) {
	// 		this.enterFunctionCall(ctx.functionCall())
	// 		return `(f32.const 0)` // TODO: добавить логику, чтобы можно было передавать функции в аргументах других функций
	// 	} else if (ctx.ID()) {
	// 		const letName = ctx.ID().getText()
	// 		if (
	// 			!this.locals[this.currentFunction].includes(letName) &&
	// 			!this.locals['~global'].includes(letName)
	// 		) {
	// 			console.error(`Variable ${letName} is not defined`)
	// 		}
	// 		return `(get_local $${letName})`
	// 	} else if (ctx.INT()) {
	// 		return `(f32.const ${ctx.INT().getText()})`
	// 	}
	// 	return `(f32.const 0)`
	// }

	exitExpr = (ctx: ExprContext) => {
		if (ctx.INT()) {
			this.exprStack.push(`(f32.const ${ctx.INT().getText()})`)
		} else if (ctx.ID()) {
			this.exprStack.push(`(local.get $${ctx.ID().getText()})`)
		} else if (ctx.expr(1)) {
			const right = this.exprStack.pop()
			const left = this.exprStack.pop()
			let instruction: string
			const operator = ctx.getChild(1).getText() // получаем оператор в этой операции
			switch (operator) {
				case '+':
					instruction = `f32.add`
					break
				case '-':
					instruction = `f32.sub`
					break
				case '*':
					instruction = 'f32.mul'
					break
				case '/':
					instruction = 'f32.div'
					break
				case '<':
					instruction = 'f32.lt'
					break
				case '>':
					instruction = 'f32.gt'
					break
				case '<=':
					instruction = 'f32.le'
					break
				case '>=':
					instruction = 'f32.ge'
					break
				case '==':
					instruction = 'f32.eq'
					break
				case '!=':
					instruction = 'f32.ne'
					break
				default:
					throw new Error(`Unknown operator: ${operator}`)
			}
			this.exprStack.push(`(${instruction} ${left} ${right})`)
		}
	}

	exitProg = (_ctx: ProgContext) => {
		this.output = [
			`(module`,
			this.functions.join('\n'),
			`\n(func $program (export "program") (result f32)`,
			this.locals['~global'].join('\n'),
			this.instructions.join('\n'),
			this.exprStack.join('\n'),
			'))'
		]
			.filter(s => s !== '')
			.join('\n')
	}

	getResult(): string {
		return this.output
	}
}

export default function compile(input: string): string {
	const chars = new CharStream(input)
	const lexer = new TorchLexer(chars)
	const tokens = new CommonTokenStream(lexer)
	const parser = new TorchParser(tokens)
	const tree = parser.prog()

	const walker = new TorchTreeWalker()
	ParseTreeWalker.DEFAULT.walk(walker, tree)

	return walker.getResult()
}

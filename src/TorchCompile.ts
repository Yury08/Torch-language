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

	exitIfStatement = (ctx: IfStatementContext) => {
		const condition = this.exprStack.pop() // достаем условие
		const ifThenBlock = this.instructions[0] // что должно выполниться

		let wasmCode: string = `(if ${condition} (then ${ifThenBlock})`

		if (ctx.block(1)) {
			const elseBlock = this.instructions[1]
			console.log(`ELSE BLOCK INSTRUCTIONS: ${elseBlock}`)
			wasmCode += `(else ${elseBlock})`
		}

		wasmCode += `)`

		this.instructions = this.blockStack.pop()!
		this.instructions.push(wasmCode)
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

	enterFunctionDeclaration = (ctx: FunctionDeclarationContext) => {
		const funcName: string = ctx.ID().getText()
		this.currentFunction = funcName
		this.locals[funcName] = []
		this.blockStack.push(this.instructions)
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

		// чтобы не было ошибки, когда из функии ничего не возвращается
		if (!wasmCode.includes(`(return)`)) {
			wasmCode += `\n(return (f32.const 0))`
		}

		wasmCode += `)`

		this.functions.push(wasmCode)
		this.instructions = this.blockStack.pop()!
		this.currentFunction = '~global'

		console.log(`Generated WebAssembly code for function ${funcName}`)
	}

	exitFunctionCall = (ctx: FunctionCallContext) => {
		const funcName: string = ctx.ID().getText()
		const argsCont = ctx.arguments().expr_list().length
		const args: string[] = []

		for (let i = 0; i < argsCont; i++) {
			let exprVal = this.exprStack.pop()
			if (exprVal !== undefined) {
				args.unshift(exprVal)
			}
		}

		this.exprStack.push(`(call $${funcName} ${args.join(' ')})`)

		console.log(
			`Generated WebAssembly call for function ${funcName} with args: ${args.join(
				', '
			)}`
		)
	}

	exitReturnStatement = (_ctx: ReturnStatementContext) => {
		const expr = this.exprStack.pop()
		if (expr) {
			this.instructions.push(`(return ${expr})`)
		}
	}

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

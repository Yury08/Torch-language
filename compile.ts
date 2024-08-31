import { readFileSync } from 'node:fs'
import wabt from 'wabt'
import compile from './src/TorchCompile'

async function compileAndRunWasm(watCode: string): Promise<number> {
	const wabtModule = await wabt()
	const wasmModule = wabtModule.parseWat('inline', watCode)
	const { buffer } = wasmModule.toBinary({})

	const module = await WebAssembly.instantiate(buffer)
	const result = (module.instance.exports.program as Function)()
	return result
}

const filePath = './ex.torch'
const watCode = compile(readFileSync(filePath, 'utf8'))

console.log(watCode)

compileAndRunWasm(watCode)
	.then(result => console.log(result.toString()))
	.catch(error => console.error(`Error: ${error}`))

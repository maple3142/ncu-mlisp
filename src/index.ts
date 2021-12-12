import nearley = require('nearley')
import mlisp = require('./mlisp')
import { ParsedValue, Expression } from './datatypes'
import { createDefaultRuntimeScope } from './runtime'

const grammar = nearley.Grammar.fromCompiled(mlisp)
const parser = new nearley.Parser(grammar)

process.stdin.setEncoding('utf8')

process.stdin.on('data', chk => {
	parser.feed(chk.toString())
})

process.stdin.on('end', () => {
	if (parser.results.length === 0) {
		console.log('Invalid input file')
	} else {
		const parsed = parser.results[0]
		const scope = createDefaultRuntimeScope()
		for (const expr of parsed as ParsedValue[]) {
			Expression.fromParsed(expr).eval(scope)
		}
	}
})

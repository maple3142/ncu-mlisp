import { getTypeStr, Scope, RuntimeFunction } from './datatypes'

export const createDefaultRuntimeScope = () => {
	const scope = new Scope()

	scope.set(
		'print-num',
		new RuntimeFunction((args, scope) => {
			if (args.length !== 1) {
				throw new TypeError('Expecting 1 arguments in `print-num`')
			}
			const val = args[0].eval(scope)
			if (getTypeStr(val) !== 'number') {
				throw new TypeError('Getting a non number in `print-num`')
			}
			console.log(val.toString())
			return true
		})
	)
	scope.set(
		'print-bool',
		new RuntimeFunction((args, scope) => {
			if (args.length !== 1) {
				throw new TypeError('Expecting 1 arguments in `print-bool`')
			}
			const val = args[0].eval(scope)
			if (getTypeStr(val) !== 'boolean') {
				throw new TypeError('Getting a non boolean in `print-bool`')
			}
			console.log(val ? '#t' : '#f')
			return true
		})
	)
	scope.set(
		'+',
		new RuntimeFunction((args, scope) => {
			const vals = args.map(e => e.eval(scope))
			if (!vals.every(x => getTypeStr(x) === 'number')) {
				throw new TypeError('Getting a non number in `+`')
			}
			return vals.reduce(((a: number, b: number) => a + b) as any, 0)
		})
	)
	scope.set(
		'-',
		new RuntimeFunction((args, scope) => {
			if (args.length !== 2) {
				throw new TypeError('Expecting 2 arguments in `-`')
			}
			const vals = args.map(e => e.eval(scope))
			if (!vals.every(x => getTypeStr(x) === 'number')) {
				throw new TypeError('Getting a non number in `-`')
			}
			return <number>vals[0] - <number>vals[1]
		})
	)
	scope.set(
		'*',
		new RuntimeFunction((args, scope) => {
			const vals = args.map(e => e.eval(scope))
			if (!vals.every(x => getTypeStr(x) === 'number')) {
				throw new TypeError('Getting a non number in `*`')
			}
			return vals.reduce(((a: number, b: number) => a * b) as any, 1)
		})
	)
	scope.set(
		'/',
		new RuntimeFunction((args, scope) => {
			if (args.length !== 2) {
				throw new TypeError('Expecting 2 arguments in `/`')
			}
			const vals = args.map(e => e.eval(scope))
			if (!vals.every(x => getTypeStr(x) === 'number')) {
				throw new TypeError('Getting a non number in `/`')
			}
			const r = Math.trunc(<number>vals[0] / <number>vals[1])
			return Object.is(r, -0) ? 0 : r
		})
	)
	scope.set(
		'mod',
		new RuntimeFunction((args, scope) => {
			if (args.length !== 2) {
				throw new TypeError('Expecting 2 arguments in `mod`')
			}
			const vals = args.map(e => e.eval(scope))
			if (!vals.every(x => getTypeStr(x) === 'number')) {
				throw new TypeError('Getting a non number in `mod`')
			}
			const a = vals[0] as number
			const b = vals[1] as number
			return ((a % b) + b) % b
		})
	)
	scope.set(
		'>',
		new RuntimeFunction((args, scope) => {
			if (args.length !== 2) {
				throw new TypeError('Expecting 2 arguments in `>`')
			}
			const vals = args.map(e => e.eval(scope))
			if (!vals.every(x => getTypeStr(x) === 'number')) {
				throw new TypeError('Getting a non number in `>`')
			}
			return <number>vals[0] > <number>vals[1]
		})
	)
	scope.set(
		'<',
		new RuntimeFunction((args, scope) => {
			if (args.length !== 2) {
				throw new TypeError('Expecting 2 arguments in `<`')
			}
			const vals = args.map(e => e.eval(scope))
			if (!vals.every(x => getTypeStr(x) === 'number')) {
				throw new TypeError('Getting a non number in `<`')
			}
			return <number>vals[0] < <number>vals[1]
		})
	)
	scope.set(
		'=',
		new RuntimeFunction((args, scope) => {
			const vals = args.map(e => e.eval(scope))
			for (let i = 1; i < vals.length; i++) {
				if (vals[i] !== vals[0]) {
					return false
				}
			}
			return true
		})
	)
	scope.set(
		'and',
		new RuntimeFunction((args, scope) => {
			const vals = args.map(e => e.eval(scope))
			if (!vals.every(x => getTypeStr(x) === 'boolean')) {
				throw new TypeError('Getting a non boolean in `and`')
			}
			return vals.reduce(((a: number, b: number) => a && b) as any, true)
		})
	)
	scope.set(
		'or',
		new RuntimeFunction((args, scope) => {
			const vals = args.map(e => e.eval(scope))
			if (!vals.every(x => getTypeStr(x) === 'boolean')) {
				throw new TypeError('Getting a non boolean in `or`')
			}
			return vals.reduce(((a: number, b: number) => a || b) as any, false)
		})
	)
	scope.set(
		'not',
		new RuntimeFunction((args, scope) => {
			if (args.length !== 1) {
				throw new TypeError('Expecting 1 arguments in `not`')
			}
			const vals = args.map(e => e.eval(scope))
			if (!vals.every(x => getTypeStr(x) === 'boolean')) {
				throw new TypeError('Getting a non boolean in `not`')
			}
			return !vals[0]
		})
	)
	scope.set(
		'define',
		new RuntimeFunction((args, scope) => {
			if (typeof args[0].val !== 'string') {
				throw new TypeError(`Geting invalid symbol when defining variable`)
			}
			if (scope.get(args[0].val) !== undefined) {
				throw new Error("Existing variable can't be redefined")
			}
			scope.set(args[0].val, args[1].eval(scope))
			return true
		})
	)
	const createFn = new RuntimeFunction((args, definingScope) => {
		if (args.length < 2) {
			throw new TypeError('Invalid function definition')
		}
		if (!Array.isArray(args[0].val) || !args[0].val.every(x => typeof x === 'string')) {
			throw new TypeError(`Getting invalid symbols when creating function`)
		}
		const idlist = args[0].val as string[]
		const defexprs = args.slice(1, -1) // for nested function
		const fnbody = args[args.length - 1]
		return new RuntimeFunction((fnargs, callerScope) => {
			if (fnargs.length !== idlist.length) {
				throw new TypeError(`Expecting ${idlist.length} arguments but received ${fnargs.length} arguments`)
			}
			const newScope = new Scope(definingScope) // lexical scoping
			for (let i = 0; i < fnargs.length; i++) {
				newScope.set(idlist[i], fnargs[i].eval(callerScope))
			}
			defexprs.forEach(e => e.eval(newScope)) // define nested function in newscope
			return fnbody.eval(newScope)
		})
	})
	scope.set('fun', createFn)
	scope.set('lambda', createFn)
	scope.set(
		'if',
		new RuntimeFunction((args, scope) => {
			const [testexp, thenexp, elseexp] = args
			const testval = testexp.eval(scope)
			if (getTypeStr(testval) !== 'boolean') {
				throw new Error(`Expecting boolean in if statement, getting ${testval}`)
			}
			return testval ? thenexp.eval(scope) : elseexp.eval(scope)
		})
	)
	return scope
}

export const createExtendedRuntimeScope = () => {
	const scope = createDefaultRuntimeScope()
	scope.set('print', new RuntimeFunction((args, scope) => (console.log(args.map(e => e.eval(scope))), true)))
	return scope
}

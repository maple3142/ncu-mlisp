export type ParsedValue = string | boolean | number | ParsedValue[]

export type LispValue = RuntimeFunction | string | boolean | number | LispValue[]

export function getTypeStr(val: LispValue): string {
	if (typeof val === 'boolean') {
		return 'boolean'
	}
	if (typeof val === 'number') {
		return 'number'
	}
	if (typeof val === 'string') {
		return 'string'
	}
	if (Array.isArray(val)) {
		return 'list'
	}
	return val.type
}

export type RuntimeFunctionHandler = (args: Expression[], scope: Scope) => LispValue

export class RuntimeFunction {
	public type = 'function'
	private fn: RuntimeFunctionHandler
	constructor(fn: RuntimeFunctionHandler) {
		this.fn = fn
	}
	call(args: Expression[], scope: Scope): LispValue {
		return this.fn(args, scope)
	}
}

export class Scope {
	private parent?: Scope
	private table: Map<string, LispValue>
	constructor(parent?: Scope) {
		this.parent = parent
		this.table = new Map()
	}
	get(name: string): LispValue | undefined {
		if (this.table.has(name)) {
			return this.table.get(name) as LispValue
		}
		if (this.parent) {
			return this.parent.get(name)
		}
	}
	set(name: string, val: LispValue) {
		this.table.set(name, val)
	}
	get root(): Scope {
		let s: Scope = this
		while (s.parent) {
			s = s.parent
		}
		return s
	}
}

export class Expression {
	private fn: (scope: Scope) => LispValue
	public val: ParsedValue
	constructor(val: ParsedValue, fn: (scope: Scope) => LispValue) {
		this.val = val
		this.fn = fn
	}
	eval(scope: Scope): LispValue {
		return this.fn(scope)
	}
	static fromParsed(t: ParsedValue): Expression {
		if (typeof t === 'number' || typeof t === 'boolean') {
			return new Expression(t, () => t)
		}
		if (typeof t === 'string') {
			return new Expression(t, scope => {
				let r = scope.get(t)
				if (typeof r === 'undefined') {
					throw new Error(`Undefined symbol: ${t}`)
				}
				return r
			})
		}
		const exprs = t.map(Expression.fromParsed)
		return new Expression(t, scope => {
			const fn = exprs[0].eval(scope)
			const type = getTypeStr(fn)
			if (type !== 'function' && type !== 'function') {
				throw new TypeError(`Unable to call ${fn} as function`)
			}
			return (fn as RuntimeFunction).call(exprs.slice(1), scope)
		})
	}
}

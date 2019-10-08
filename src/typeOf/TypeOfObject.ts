export interface TypeOfObject {
	/**
	 * Value is an instance of Array.
	 */
	readonly isArray: boolean;
	/**
	 * Value is an instance of PrimitiveBigInt.
	 */
	readonly isBigInt: boolean;
	/**
	 * Value is an instance of PrimitiveBoolean.
	 */
	readonly isBoolean: boolean;
	/**
	 * Value is an instance of Date.
	 */
	readonly isDate: boolean;
	/**
	 * Value is an instance of PrimitiveFunction.
	 */
	readonly isFunction: boolean;
	/**
	 * Value is an instance of Map.
	 */
	readonly isMap: boolean;
	/**
	 * Value is an instance of PrimitiveNull.
	 */
	readonly isNull: boolean;
	/**
	 * Value is an instance of PrimitiveNumber.
	 */
	readonly isNumber: boolean;
	/**
	 * Value is an instance of Object.
	 */
	readonly isObject: boolean;
	/**
	 * Value is an instance of Promise.
	 */
	readonly isPromise: boolean;
	/**
	 * Value is an instance of RegExp.
	 */
	readonly isRegExp: boolean;
	/**
	 * Value is an instance of Set.
	 */
	readonly isSet: boolean;
	/**
	 * Value is an instance of PrimitiveString.
	 */
	readonly isString: boolean;
	/**
	 * Value is an instance of PrimitiveSymbol.
	 */
	readonly isSymbol: boolean;
	/**
	 * Value is an instance of PrimitiveUndefined.
	 */
	readonly isUndefined: boolean;
	/**
	 * Value is an instance of WeakMap.
	 */
	readonly isWeakMap: boolean;
	/**
	 * Value is an instance of WeakSet.
	 */
	readonly isWeakSet: boolean;
	/**
	 * Check if the given value is an instance of the given constructor.
	 * @param constructor Constructor to check instance.
	 */
	// tslint:disable-next-line: ban-types
	isInstanceOf(constructor: Function): boolean;
}

export default TypeOfObject;

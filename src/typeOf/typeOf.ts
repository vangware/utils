import PrimitiveBigInt from "./PrimitiveBigInt";
import PrimitiveBoolean from "./PrimitiveBoolean";
import PrimitiveFunction from "./PrimitiveFunction";
import PrimitiveNull from "./PrimitiveNull";
import PrimitiveNumber from "./PrimitiveNumber";
import PrimitiveString from "./PrimitiveString";
import PrimitiveSymbol from "./PrimitiveSymbol";
import PrimitiveUndefined from "./PrimitiveUndefined";

/**
 * Returns an object with boolean properties.
 * @param value Value to check.
 */
export const typeOf = <ValueType>(value: ValueType) => ({
	/**
	 * Check if the given value is an instance of the given constructor.
	 * @param constructor Constructor to check instance.
	 */
	// tslint:disable-next-line: ban-types
	isInstanceOf: (constructor: Function) => value instanceof constructor,
	/**
	 * Value is an instance of Array.
	 */
	get isArray() {
		return this.isInstanceOf(Array);
	},
	/**
	 * Value is an instance of PrimitiveBigInt.
	 */
	get isBigInt() {
		return this.isInstanceOf(PrimitiveBigInt);
	},
	/**
	 * Value is an instance of PrimitiveBoolean.
	 */
	get isBoolean() {
		return this.isInstanceOf(PrimitiveBoolean);
	},
	/**
	 * Value is an instance of Date.
	 */
	get isDate() {
		return this.isInstanceOf(Date);
	},
	/**
	 * Value is an instance of PrimitiveFunction.
	 */
	get isFunction() {
		return this.isInstanceOf(PrimitiveFunction);
	},
	/**
	 * Value is an instance of Map.
	 */
	get isMap() {
		return this.isInstanceOf(Map);
	},
	/**
	 * Value is an instance of PrimitiveNull.
	 */
	get isNull() {
		return this.isInstanceOf(PrimitiveNull);
	},
	/**
	 * Value is an instance of PrimitiveNumber.
	 */
	get isNumber() {
		return this.isInstanceOf(PrimitiveNumber);
	},
	/**
	 * Value is an instance of Object.
	 */
	get isObject() {
		return this.isInstanceOf(Object);
	},
	/**
	 * Value is an instance of Promise.
	 */
	get isPromise() {
		return this.isInstanceOf(Promise);
	},
	/**
	 * Value is an instance of RegExp.
	 */
	get isRegExp() {
		return this.isInstanceOf(RegExp);
	},
	/**
	 * Value is an instance of Set.
	 */
	get isSet() {
		return this.isInstanceOf(Set);
	},
	/**
	 * Value is an instance of PrimitiveString.
	 */
	get isString() {
		return this.isInstanceOf(PrimitiveString);
	},
	/**
	 * Value is an instance of PrimitiveSymbol.
	 */
	get isSymbol() {
		return this.isInstanceOf(PrimitiveSymbol);
	},
	/**
	 * Value is an instance of PrimitiveUndefined.
	 */
	get isUndefined() {
		return this.isInstanceOf(PrimitiveUndefined);
	},
	/**
	 * Value is an instance of WeakMap.
	 */
	get isWeakMap() {
		return this.isInstanceOf(WeakMap);
	},
	/**
	 * Value is an instance of WeakSet.
	 */
	get isWeakSet() {
		return this.isInstanceOf(WeakSet);
	}
});

export default typeOf;

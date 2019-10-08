import PrimitiveBigInt from "./PrimitiveBigInt";
import PrimitiveBoolean from "./PrimitiveBoolean";
import PrimitiveFunction from "./PrimitiveFunction";
import PrimitiveNull from "./PrimitiveNull";
import PrimitiveNumber from "./PrimitiveNumber";
import PrimitiveString from "./PrimitiveString";
import PrimitiveSymbol from "./PrimitiveSymbol";
import PrimitiveUndefined from "./PrimitiveUndefined";
import TypeOfFunction from "./TypeOfFunction";

/**
 * Returns an object with boolean properties.
 * @param value Value to check.
 */
export const typeOf: TypeOfFunction = value => ({
	get isArray() {
		return this.isInstanceOf(Array);
	},
	get isBigInt() {
		return this.isInstanceOf(PrimitiveBigInt);
	},
	get isBoolean() {
		return this.isInstanceOf(PrimitiveBoolean);
	},
	get isDate() {
		return this.isInstanceOf(Date);
	},
	get isFunction() {
		return this.isInstanceOf(PrimitiveFunction);
	},
	get isMap() {
		return this.isInstanceOf(Map);
	},
	get isNull() {
		return this.isInstanceOf(PrimitiveNull);
	},
	get isNumber() {
		return this.isInstanceOf(PrimitiveNumber);
	},
	get isObject() {
		return this.isInstanceOf(Object);
	},
	get isPromise() {
		return this.isInstanceOf(Promise);
	},
	get isRegExp() {
		return this.isInstanceOf(RegExp);
	},
	get isSet() {
		return this.isInstanceOf(Set);
	},
	get isString() {
		return this.isInstanceOf(PrimitiveString);
	},
	get isSymbol() {
		return this.isInstanceOf(PrimitiveSymbol);
	},
	get isUndefined() {
		return this.isInstanceOf(PrimitiveUndefined);
	},
	get isWeakMap() {
		return this.isInstanceOf(WeakMap);
	},
	get isWeakSet() {
		return this.isInstanceOf(WeakSet);
	},
	isInstanceOf: constructor => value instanceof constructor
});

export default typeOf;

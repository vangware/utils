import isArray from "../isArray/isArray";
import isBigInt from "../isBigInt";
import isBoolean from "../isBoolean";
import isDate from "../isDate";
import isFunction from "../isFunction";
import isInstanceOf from "../isInstanceOf";
import isMap from "../isMap";
import isNull from "../isNull";
import isNumber from "../isNumber";
import isObject from "../isObject";
import isPromise from "../isPromise";
import isRegExp from "../isRegExp";
import isSet from "../isSet";
import isString from "../isString";
import isSymbol from "../isSymbol";
import isUndefined from "../isUndefined";
import isWeakMap from "../isWeakMap";
import isWeakSet from "../isWeakSet";
import tap from "../tap";
import TypeOfFunction from "./TypeOfFunction";

const deprecationWarning = (getterName: string) =>
	tap(() =>
		console.warn(
			`typeOf is being deprecated. Import the function ${getterName} directly`
		)
	);

/**
 * Returns an object with boolean properties.
 * @param value Value to check.
 */
export const typeOf: TypeOfFunction = value => ({
	get isArray() {
		return isArray(deprecationWarning("isArray")(value));
	},
	get isBigInt() {
		return isBigInt(deprecationWarning("isBigInt")(value));
	},
	get isBoolean() {
		return isBoolean(deprecationWarning("isBoolean")(value));
	},
	get isDate() {
		return isDate(deprecationWarning("isDate")(value));
	},
	get isFunction() {
		return isFunction(deprecationWarning("isFunction")(value));
	},
	get isMap() {
		return isMap(deprecationWarning("isMap")(value));
	},
	get isNull() {
		return isNull(deprecationWarning("isNull")(value));
	},
	get isNumber() {
		return isNumber(deprecationWarning("isNumber")(value));
	},
	get isObject() {
		return isObject(deprecationWarning("isObject")(value));
	},
	get isPromise() {
		return isPromise(deprecationWarning("isPromise")(value));
	},
	get isRegExp() {
		return isRegExp(deprecationWarning("isRegExp")(value));
	},
	get isSet() {
		return isSet(deprecationWarning("isSet")(value));
	},
	get isString() {
		return isString(deprecationWarning("isString")(value));
	},
	get isSymbol() {
		return isSymbol(deprecationWarning("isSymbol")(value));
	},
	get isUndefined() {
		return isUndefined(deprecationWarning("isUndefined")(value));
	},
	get isWeakMap() {
		return isWeakMap(deprecationWarning("isWeakMap")(value));
	},
	get isWeakSet() {
		return isWeakSet(deprecationWarning("isWeakSet")(value));
	},
	isInstanceOf: constructor =>
		isInstanceOf(deprecationWarning("isInstanceOf")(value), constructor)
});

export default typeOf;

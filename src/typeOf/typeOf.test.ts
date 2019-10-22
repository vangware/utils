import test from "ava";
import typeOf from "./typeOf";

test("returns correct types", t => {
	t.assert(typeOf([]).isArray);
	t.assert(typeOf(new Array()).isArray);
	t.assert(typeOf(1n).isBigInt);
	t.assert(typeOf(true).isBoolean);
	t.assert(typeOf(false).isBoolean);
	t.assert(typeOf(new Date()).isDate);
	t.assert(typeOf(() => undefined).isFunction);
	t.assert(typeOf(class {}).isFunction);
	t.assert(typeOf(new Map()).isMap);
	// tslint:disable-next-line: no-null-keyword
	t.assert(typeOf(null).isNull);
	t.assert(typeOf(1).isNumber);
	t.assert(typeOf(NaN).isNumber);
	t.assert(typeOf(Infinity).isNumber);
	t.assert(typeOf({}).isObject);
	t.assert(typeOf([]).isObject);
	t.assert(typeOf(new Promise(() => undefined)).isPromise);
	t.assert(typeOf(/./).isRegExp);
	t.assert(typeOf(new RegExp("")).isRegExp);
	t.assert(typeOf(new Set()).isSet);
	t.assert(typeOf("").isString);
	t.assert(typeOf(Symbol("Test")).isSymbol);
	t.assert(typeOf(undefined).isUndefined);
	t.assert(typeOf(void 0).isUndefined);
	t.assert(typeOf(new WeakMap()).isWeakMap);
	t.assert(typeOf(new WeakSet()).isWeakSet);
	t.assert(typeOf([]).isInstanceOf(Array));
});

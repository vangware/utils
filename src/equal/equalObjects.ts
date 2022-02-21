import { objectGetProperty } from "../object/objectGetProperty.js";
import { isDate } from "../type/isDate.js";
import { isObject } from "../type/isObject.js";
import { isRegExp } from "../type/isRegExp.js";
import { equalValues } from "./equalValues.js";

/**
 * Given a `compare` function, an `expected` value and an `actual` value,
 * returns `true` if those values are equal based on the `compare` output,
 * or `false` if not.
 *
 * @example
 * ```typescript
 * const compare = actual => expected => actual === expected;
 * const equalToObject = equalObjects(compare)({ foo: "bar" });
 *
 * equalToObject({ foo: "bar" }); // true
 * equalToObject({ bar: "baz" }); // false
 * ```
 * @param compare Comparison function.
 * @returns Curried function with `compare` function in context.
 */
export const equalObjects =
	(compare: (expected: unknown) => (actual: unknown) => boolean) =>
	/**
	 * Curried function with `compare` function set.
	 *
	 * @example
	 * ```typescript
	 * const equalToObject = equalObjects(compare)({ foo: "bar" });
	 *
	 * equalToObject({ foo: "bar" }); // true
	 * ```
	 * @param expected Expected value to compare.
	 * @returns Curried function with `compare` and `expected` in context.
	 */
	(expected: unknown) =>
	/**
	 * Curried function with `compare` and `expected` set.
	 *
	 * @example
	 * ```typescript
	 * equalToObject({ foo: "bar" }); // true
	 * ```
	 * @param actual Actual value to compare.
	 * @returns `true` if equal and `false` if not.
	 */
	(actual: unknown) =>
		!isRegExp(expected) &&
		!isRegExp(actual) &&
		!isDate(expected) &&
		!isDate(actual) &&
		isObject(expected) &&
		isObject(actual) &&
		// eslint-disable-next-line ban/ban
		equalValues(Object.keys(expected).length)(
			// eslint-disable-next-line ban/ban
			Object.keys(actual).length,
		) &&
		Object.entries(expected).every(([key, value]) =>
			compare(value)(objectGetProperty(key)(actual)),
		);

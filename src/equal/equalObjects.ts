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
 */
export const equalObjects =
	(compare: (expected: unknown) => (actual: unknown) => boolean) =>
	/**
	 * @param expected Expected value to compare.
	 */
	(expected: unknown) =>
	/**
	 * @param actual Actual value to compare.
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

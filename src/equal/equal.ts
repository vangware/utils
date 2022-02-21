import { equalArrays } from "./equalArrays.js";
import { equalDates } from "./equalDates.js";
import { equalObjects } from "./equalObjects.js";
import { equalRegExp } from "./equalRegExp.js";
import { equalValues } from "./equalValues.js";

/**
 * Given and `expected` value and an `actual` value, returns `true` if those
 * values are deeply equal, or `false` if not.
 *
 * @example
 * ```typescript
 * const equalTo2 = equal(2);
 * const equalToObject = equal({ foo: "bar" });
 *
 * equalTo2(2); // true
 * equalTo2(5); // false
 * equalToObject({ foo: "bar" }); // true
 * equalToObject({ bar: "baz" }); // false
 * ```
 * @param expected Expected value to compare.
 * @returns `true` if equal and `false` if not.
 */
export const equal =
	(expected: unknown) =>
	/**
	 * Curried function with `expected` set.
	 *
	 * @example
	 * ```typescript
	 * equalTo2(2); // true
	 * equalTo2(5); // false
	 * ```
	 * @param actual Actual value to compare.
	 */
	(actual: unknown) =>
		[
			equalValues,
			equalDates,
			equalRegExp,
			equalArrays(equal),
			equalObjects(equal),
		].some(compare => compare(expected)(actual));

import { equalArrays } from "./equalArrays";
import { equalDates } from "./equalDates";
import { equalObjects } from "./equalObjects";
import { equalRegExp } from "./equalRegExp";
import { equalValues } from "./equalValues";

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
 */
export const equal =
	(expected: unknown) =>
	/**
	 * @param actual Actual value to compare.
	 */
	(actual: unknown) =>
		[
			equalValues,
			equalDates,
			equalRegExp,
			equalArrays(equal),
			equalObjects(equal)
		].some(compare => compare(expected)(actual));

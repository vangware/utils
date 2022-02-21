import { isDate } from "../type/isDate.js";
import { equalValues } from "./equalValues.js";

/**
 * Given and `expected` value and an `actual` value, returns `true` if those
 * values are dates and equal, or `false` if not.
 *
 * @example
 * ```typescript
 * const equalToDate0 = equalDates(new Date(0));
 *
 * equalToDate0(new Date(0)); // true
 * equalToDate0(new Date(1)); // false
 * ```
 * @param expected Expected value to compare.
 * @returns Curried function with `expected` in context.
 */
export const equalDates =
	(expected: unknown) =>
	/**
	 * Curried function with `expected` set.
	 *
	 * @example
	 * ```typescript
	 * equalToDate0(new Date(0)); // true
	 * ```
	 * @param actual Actual value to compare.
	 * @returns `true` if equal and `false` if not.
	 */
	(actual: unknown) =>
		isDate(expected) &&
		isDate(actual) &&
		equalValues(expected.getTime())(actual.getTime());

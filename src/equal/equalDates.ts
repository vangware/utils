import { isDate } from "../type/isDate";

/**
 * Given and `expected` value and an `actual` value, returns `true` if those
 * values are dates and equal, or `false` if not.
 *
 * @example
 * ```typescript
 * const equalToDate = equalDates(new Date(0));
 *
 * equalToDate(new Date(0)); // true
 * equalToDate(new Date(1)); // false
 * ```
 * @param expected Expected value to compare.
 */
export const equalDates = (expected: unknown) =>
	/**
	 * @param actual Actual value to compare.
	 */
	(actual: unknown) =>
		isDate(expected) &&
		isDate(actual) &&
		expected.getTime() === actual.getTime();

export default equalDates;

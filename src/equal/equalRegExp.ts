import { isRegExp } from "../type/isRegExp";
import { equalValues } from "./equalValues";

/**
 * Given and `expected` value and an `actual` value, returns `true` if those
 * values are regular expressions and equal, or `false` if not.
 *
 * @example
 * ```typescript
 * const equalToRegExp = equalRegExp(new RegExp(/./gu));
 *
 * equalToRegExp(new RegExp(/./gu)); // true
 * equalToRegExp(new RegExp(/foo/gu)); // false
 * ```
 * @param expected Expected value to compare.
 */
export const equalRegExp =
	/**
	 * @param expected Expected value to compare.
	 */


		(expected: unknown) =>
		/**
		 * @param actual Actual value to compare.
		 */
		(actual: unknown) =>
			isRegExp(expected) &&
			isRegExp(actual) &&
			equalValues(expected.toString())(actual.toString());

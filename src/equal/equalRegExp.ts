import { isRegExp } from "../type/isRegExp.js";
import { equalValues } from "./equalValues.js";

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
 * @returns Curried function `expected` in context.
 */
export const equalRegExp =
	(expected: unknown) =>
	/**
	 * Curried function with `expected` set.
	 *
	 * @example
	 * ```typescript
	 * equalToRegExp(new RegExp(/./gu)); // true
	 * ```
	 * @param actual Actual value to compare.
	 * @returns `true` if equal and `false` if not.
	 */
	(actual: unknown) =>
		isRegExp(expected) &&
		isRegExp(actual) &&
		equalValues(expected.toString())(actual.toString());

import { isArray } from "../type/isArray.js";
import { equalValues } from "./equalValues.js";

/**
 * Given a `compare` function, an `expected` value and an `actual` value,
 * returns `true` if those values are equal based on the `compare` output,
 * or `false` if not.
 *
 * @example
 * ```typescript
 * const compare = actual => expected => actual === expected;
 * const equalToArray = equalArrays(compare)(["foo", "bar"]);
 *
 * equalToArray(["foo", "bar"]); // true
 * equalToArray(["bar", "foo"]); // false
 * ```
 * @param compare Comparison function.
 * @returns Curried function with `compare` function in context.
 */
export const equalArrays =
	(compare: (expected: unknown) => (actual: unknown) => boolean) =>
	/**
	 * Curried function with `compare` set.
	 *
	 * @example
	 * ```typescript
	 * const equalToArray = equalArrays(compare)(["foo", "bar"]);
	 *
	 * equalToArray(["foo", "bar"]); // true
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
	 * equalToArray(["foo", "bar"]); // true
	 * ```
	 * @param actual Actual value to compare.
	 * @returns `true` if equal and `false` if not.
	 */
	(actual: unknown) =>
		isArray(expected) &&
		isArray(actual) &&
		equalValues(expected.length)(actual.length) &&
		// eslint-disable-next-line max-params
		expected.every((item, index) => compare(item)(actual[index]));

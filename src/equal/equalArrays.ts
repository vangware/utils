import { isArray } from "../type/isArray";

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
 */
export const equalArrays = (
	compare: (expected: unknown) => (actual: unknown) => boolean
) =>
	/**
	 * @param expected Expected value to compare.
	 */
	(expected: unknown) =>
		/**
		 * @param actual Actual value to compare.
		 */
		(actual: unknown) =>
			isArray(expected) &&
			isArray(actual) &&
			expected.length === actual.length &&
			expected.every((item, index) => compare(item)(actual[index]));

export default equalArrays;

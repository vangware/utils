/**
 * Given and `expected` value and an `actual` value, returns `true` if those
 * values are equal, or `false` if not.
 *
 * @example
 * ```typescript
 * const equalTo2 = equalValues(2);
 *
 * equalTo2(2); // true
 * equalTo2(8); // false
 * ```
 * @param expected Expected value to compare.
 */
export const equalValues = (expected: unknown) =>
	/**
	 * @param actual Actual value to compare.
	 */
	(actual: unknown) => expected === actual;

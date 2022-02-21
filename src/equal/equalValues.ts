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
 * @returns Curried function with `expected` in context.
 */
export const equalValues =
	(expected: unknown) =>
	/**
	 * Curried function with `expected` set.
	 *
	 * @example
	 * ```typescript
	 * equalTo2(2); // true
	 * equalTo2(8); // false
	 * ```
	 * @param actual Actual value to compare.
	 * @returns `true` if equal and `false` if not.
	 */
	(actual: unknown) =>
		Object.is(expected, actual);

/**
 * Takes a `minimum` and `maximum` and returns a boolean if `source` number
 * is between them.
 *
 * @example
 * ```typescript
 * const between0 = between(0);
 * const between0And10 = between0(10);
 *
 * between0And10(5); // 5 because is inside the between10)
 * between0And10(-1); // 0 because it was lower than the minimum (0).
 * between0And10(11); // 10 because it was higher than the maximum (10).
 * ```
 * @param minimum Minimum boundary.
 * @returns Curried function with `minimum` set in context.
 */
export const between = (minimum: number) =>
	/**
	 * @param maximum Maximum boundary.
	 * @returns Curried function with `minimum` and `maximum` set in context.
	 */
	(maximum: number) =>
		/**
		 * @param source Number to check boundaries on.
		 * @returns `true` if between `minimum` and `maximum`.
		 */
		(source: number) => source >= minimum && source <= maximum;

export default between;

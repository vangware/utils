/**
 * Takes a `minimum` and `maximum` and applies them to a given `source` number.
 *
 * @example
 * ```typescript
 * const boundaryFrom0 = numberBoundary(0);
 * const boundaryFrom0To10 = boundaryFrom0(10);
 *
 * boundaryFrom0To10(5); // 5 because is inside the boundary (0-10)
 * boundaryFrom0To10(-1); // 0 because it was lower than the minimum (0).
 * boundaryFrom0To10(11); // 10 because it was higher than the maximum (10).
 * ```
 * @param minimum Minimum boundary.
 * @returns Curried function with `minimum` set in context.
 */
export const numberBoundary = (minimum: number) =>
	/**
	 * @param maximum Maximum boundary.
	 * @returns Curried function with `minimum` and `maximum` set in context.
	 */
	(maximum: number) =>
		/**
		 * @param source Number to apply boundaries on.
		 * @returns Given source, or `minimum`/`maximum` when out of boundaries.
		 */
		(source: number) =>
			source < minimum ? minimum : source > maximum ? maximum : source;

export default numberBoundary;

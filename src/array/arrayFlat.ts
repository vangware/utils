/**
 * Curried wrapper for `Array.prototype.flat`.
 *
 * @example
 * ```typescript
 * const flatten = arrayFlat(1);
 * flatten([["foo", "bar"], [1, 2]]); // ["foo", "bar", 1, 2]
 * ```
 * @template Depth Recursion depth type.
 * @param depth The maximum recursion depth.
 * @returns Curried function with `depth` in context.
 */
export const arrayFlat = <Depth extends number>(depth: Depth) =>
	/**
	 * @param source Source array to be flatten.
	 */
	<Item>(source: readonly Item[]) => source.flat(depth);

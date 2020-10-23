import type { ReadOnlyObjectArray } from "../types/ReadOnlyObjectArray";

/**
 * Curried wrapper for `Array.prototype.flat`.
 *
 * @example
 * ```typescript
 * const flatten = arrayFlat(1);
 * flatten([["foo", "bar"], [1, 2]]); // ["foo", "bar", 1, 2]
 * ```
 * @param depth The maximum recursion depth.
 * @returns Curried function with `depth` in context.
 */
export const arrayFlat = <Depth extends number>(depth: Depth) =>
	/**
	 * @param source Source array to be flatten.
	 */
	<Item>(source: ReadOnlyObjectArray<Item>) =>
		source.flat(depth) as ReadOnlyObjectArray<
			FlatArray<ReadOnlyObjectArray<Item>, Depth>
		>;

import ReadOnlyObjectArray from "../types/ReadOnlyObjectArray";

/**
 * Takes a `start` and and `end` and applies a `slice` to given `source` array.
 *
 * @example
 * ```typescript
 * const sliceFrom1 = arraySlice(1);
 * const sliceFrom1To3 = sliceFrom1(3);
 *
 * sliceFrom1To3([0, 1, 2, 3]); // [1, 2]
 * ```
 * @param start Slice start.
 * @returns Curried function with `start` in context.
 */
export const arraySlice = (start: number) =>
	/**
	 * @param end Slice end.
	 * @returns Curried function with `start` in context.
	 */
	(end: number) =>
		/**
		 * @template Item Type of items in source array.
		 * @param source Source array to slice.
		 * @returns Sliced copy of `source` array using `start` and `end`.
		 */
		<Item>(source: ReadOnlyObjectArray<Item>) => source.slice(start, end);

export default arraySlice;

import ReadOnlyObjectArray from "../types/ReadOnlyObjectArray";
import Sorter from "../types/Sorter";

/**
 * Takes a `sorter` function and applies it to given `source` array.
 *
 * @example
 * ```typescript
 * const sortNumbers = arraySort(
 * 	(next: number) => (item: number) => next - item
 * );
 *
 * sortNumbers([3, 0, 2, 1]); // [0, 1, 2, 3]
 * ```
 * @template Item Type of the items in the source array.
 * @param sorter Sorter function function.
 * @returns Curried function with `sorter` in context.
 */
export const arraySort = <Item>(sorter: Sorter<Item>) =>
	/**
	 * @param source Source array to be sorted.
	 * @returns Copy of source with values sorted using `sorter`.
	 */
	(source: ReadOnlyObjectArray<Item>) =>
		[...source].sort((next, item) => sorter(next)(item));

export default arraySort;

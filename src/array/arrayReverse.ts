import type { ReadOnlyObjectArray } from "../types/ReadOnlyObjectArray";

/**
 * Takes a `source` array and reverse the order of its items.
 *
 * @example
 * ```typescript
 * arrayReverse([0, 1, 2, 3]); // [3, 2, 1, 0]
 * ```
 * @template Item Type of the items in the source array.
 * @param source Source array to be reversed.
 * @returns Copy of source with values in reversed order.
 */
export const arrayReverse = <Item>(source: ReadOnlyObjectArray<Item>) =>
	[...source].reverse();

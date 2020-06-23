import { ArrayOrIterable } from "../types/ArrayOrIterable";
import ReadOnlyObjectArray from "../types/ReadOnlyObjectArray";

/**
 * Given an `ArrayLike` or `Iterable`, return an array.
 *
 * @example
 * ```typescript
 * arrayFrom("hello"); // ["h", "e", "l", "l", "o"]
 * ```
 * @template Item Type of items in source array.
 * @param source Source value (must be an `ArrayLike` or `Iterable`).
 * @returns Frozen array made with given `ArrayLike` or `Iterable`.
 */
export const arrayFrom = <Item>(source: ArrayOrIterable<Item>) =>
	(Array.from(source) as unknown) as ReadOnlyObjectArray<Item>;

export default arrayFrom;

import { ArrayOrIterable } from "../types/ArrayOrIterable";

/**
 * Given an `ArrayLike` or `Iterable`, return an array.
 *
 * @example
 * ```typescript
 * from("hello"); // ["h", "e", "l", "l", "o"]
 * ```
 * @template Item Type of items in source array.
 * @param source Source value (must be an `ArrayLike` or `Iterable`).
 * @returns Frozen array made with given `ArrayLike` or `Iterable`.
 */
export const from = <Item>(source: ArrayOrIterable<Item>): readonly Item[] =>
	Array.from(source);

export default from;
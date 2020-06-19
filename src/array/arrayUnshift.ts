import { arrayInsert } from "./arrayInsert";

/**
 * Takes an item and pushes it into the beginning of given source array.
 *
 * @example
 * ```typescript
 * const unshiftZero = unshift(0);
 *
 * unshiftZero([1, 2, 3]); // [0, 1, 2, 3]
 * unshiftZero(["value"]); // [0, "value"]
 * ```
 * @template Item Type of items to be inserted into source array.
 * @param item Item to be inserted.
 * @returns Curried function with `item` and `index` in context.
 */
export const arrayUnshift = <Item>(item: Item) => arrayInsert(item)(0);

export default arrayUnshift;

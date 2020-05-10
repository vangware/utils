import { arrayInsert } from "./arrayInsert";

/**
 * Takes an `item` and pushes it into the end of given `source` array.
 *
 * @example
 * ```typescript
 * const pushFour = arrayPush(4);
 *
 * pushFour([0, 1, 2, 3]); // [0, 1, 2, 3, 4]
 * pushFour(["value"]); // ["value", 4]
 * ```
 * @template Item Type of items to be inserted into source array.
 * @param item Item to be inserted.
 * @returns Curried function with `item` and `index` in context.
 */
export const arrayPush = <Item>(item: Item) => arrayInsert(item)(Infinity);

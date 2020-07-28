import { arrayInsert } from "./arrayInsert";

/**
 * Takes an `item` and inserts it at the beginning of given source array.
 *
 * @example
 * ```typescript
 * const arrayInsertValueFirst = arrayInsertFirst("value");
 *
 * arrayInsertValueFirst([1, 2, 3]); // ["value", 1, 2, 3]
 * arrayInsertValueFirst(["foo", "bar"]); // ["value", "foo", "bar"]
 * ```
 * @returns Curried function with `item` and `index` in context.
 */
export const arrayInsertFirst = arrayInsert(0);

export default arrayInsertFirst;

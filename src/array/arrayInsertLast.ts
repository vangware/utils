import { arrayInsert } from "./arrayInsert";

/**
 * Takes an `item` and inserts it at the end of given `source` array.
 *
 * @example
 * ```typescript
 * const arrayInsertValueLast = arrayInsertLast("value");
 *
 * arrayInsertValueLast([0, 1, 2, 3]); // [0, 1, 2, 3, "value"]
 * arrayInsertValueLast(["foo", "bar"]); // ["foo", "bar", "value"]
 * ```
 * @returns Curried function with `item` and `index` in context.
 */
export const arrayInsertLast = arrayInsert(Infinity);

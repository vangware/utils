import { arrayReplace } from "./arrayReplace";

/**
 * Takes an `item` and replaces the last with it in the given `source` array.
 *
 * @example
 * ```typescript
 * const arrayReplaceValueLast = arrayReplaceLast("value");
 *
 * arrayReplaceValueLast([0, 1, 2, 3]); // [0, 1, 2, "value"]
 * arrayReplaceValueLast(["foo", "bar"]); // ["foo", "value"]
 * ```
 * @returns Curried function with `item` and `index` in context.
 */
export const arrayReplaceLast = arrayReplace(Infinity);

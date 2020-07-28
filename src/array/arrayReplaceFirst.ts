import { arrayReplace } from "./arrayReplace";

/**
 * Takes an `item` and replaces the first one with it in the given source array.
 *
 * @example
 * ```typescript
 * const arrayReplaceValueFirst = arrayReplaceFirst("value");
 *
 * arrayReplaceValueFirst([1, 2, 3]); // ["value", 2, 3]
 * arrayReplaceValueFirst(["foo", "bar"]); // ["value", "bar"]
 * ```
 * @returns Curried function with `item` and `index` in context.
 */
export const arrayReplaceFirst = arrayReplace(0);

export default arrayReplaceFirst;

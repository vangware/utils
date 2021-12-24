import { arraySlice } from "./arraySlice.js";

/**
 * Takes an `end` and applies a `slice` to `source` array from the start of the
 * `source` to the given `end`.
 *
 * @example
 * ```typescript
 * const sliceTo2 = arraySliceTo(2);
 *
 * sliceTo2([0, 1, 2, 3]); // [0, 1, 2]
 * ```
 * @param end Slice end.
 * @returns Curried function with `end` in context (start set to 0).
 */
export const arraySliceTo = arraySlice(0);

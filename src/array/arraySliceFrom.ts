import { arraySlice } from "./arraySlice.js";

/**
 * Takes a `start` and applies a `slice` to `source` array from given `start`
 * to the end of the `source`.
 *
 * @example
 * ```typescript
 * const sliceFrom1 = arraySliceFrom(1);
 *
 * sliceFrom1([0, 1, 2, 3]); // [1, 2, 3]
 * ```
 * @param start Slice start.
 * @returns Curried function with `start` in context.
 */
export const arraySliceFrom = (start: number) => arraySlice(start)(Infinity);

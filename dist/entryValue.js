import { get } from "./get.js";
/**
 * Get value of an `Entry`.
 *
 * @category Functions
 * @example
 * ```typescript
 * entryKey(["key", "value"]); // "value"
 * ```
 * @param entry Entry to get vale from.
 * @returns Value of an `Entry`.
 */
export const entryValue = get(1);

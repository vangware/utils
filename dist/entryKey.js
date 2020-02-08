import { get } from "./get.js";
/**
 * Get key of an `Entry`.
 *
 * @category Functions
 * @example
 * ```typescript
 * entryKey(["key", "value"]); // "key"
 * ```
 * @param entry Entry to get key from.
 * @returns Key of an `Entry`.
 */
export const entryKey = get(0);

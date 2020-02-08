import type { Entry, EntryKey } from "@vangware/types";
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
export declare const entryKey: <InputEntry extends Entry>(
	entry: InputEntry,
) => EntryKey<InputEntry>;

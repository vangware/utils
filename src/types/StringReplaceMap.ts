import type { ImmutableRecord } from "./ImmutableRecord.js";

/**
 * String replace dictionary.
 *
 * @example
 * ```typescript
 * {
 * 	[searchString]: "replacingString"
 * }
 * ```
 */
export type StringReplaceMap = ImmutableRecord<number | string, string>;

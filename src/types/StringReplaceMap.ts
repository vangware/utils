import type { ImmutableRecord } from "./ImmutableRecord";

/**
 * Object with the following shape:
 * ```
 * {
 * 	[searchString]: "replacingString"
 * }
 * ```
 */
export type StringReplaceMap = ImmutableRecord<number | string, string>;

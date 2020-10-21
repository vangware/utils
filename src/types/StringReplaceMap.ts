import { ReadOnlyRecord } from "./ReadOnlyRecord";

/**
 * Object with the following shape:
 * ```
 * {
 * 	[searchString]: "replacingString"
 * }
 * ```
 */
export type StringReplaceMap = ReadOnlyRecord<string, string | number>;

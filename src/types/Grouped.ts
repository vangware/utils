import type { ImmutableRecord } from "./ImmutableRecord.js";

/**
 * Object with the following shape:
 * ```
 * {
 * 	[groupName]: [...valuesOfGroupName]
 * }
 * ```
 *
 * @template Item Type of the items in the source array.
 */
export type Grouped<Item> = ImmutableRecord<ReadonlyArray<Item>, string>;

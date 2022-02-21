import type { ImmutableRecord } from "./ImmutableRecord.js";

/**
 * Group object.
 *
 * @example
 * ```typescript
 * {
 * 	[groupName]: [...valuesOfGroupName]
 * }
 * ```
 * @template Item Type of the items in the source array.
 */
export type Grouped<Item> = ImmutableRecord<ReadonlyArray<Item>, string>;

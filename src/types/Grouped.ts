import type { ReadOnlyObjectArray } from "./ReadOnlyObjectArray";
import type { ReadOnlyRecord } from "./ReadOnlyRecord";

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
export type Grouped<Item> = ReadOnlyRecord<string, ReadOnlyObjectArray<Item>>;

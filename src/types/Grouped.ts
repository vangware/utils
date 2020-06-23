import ReadOnlyObjectArray from "./ReadOnlyObjectArray";
import ReadOnlyRecord from "./ReadOnlyRecord";

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

export default Grouped;

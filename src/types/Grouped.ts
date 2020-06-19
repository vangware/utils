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
export type Grouped<Item> = Readonly<Record<string, readonly Item[]>>;

export default Grouped;

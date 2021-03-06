/**
 * Grouper function.
 *
 * @template Item Type of the items in the source array.
 * @param item Item of the source array.
 * @returns Group name.
 */
export type Grouper<Item> = (item: Item) => number | string;

import { ReadOnlyObject } from "./ReadOnlyObject";

/**
 * Filter function.
 *
 * @template Item Type of the items in the source array.
 * @template Filtered Type of filtered items.
 */
export type Filterer<Item, Filtered extends Item = Item> = (
	item: ReadOnlyObject<Item>
) => item is ReadOnlyObject<Filtered>;

export default Filterer;

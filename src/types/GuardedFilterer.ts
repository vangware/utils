import type { ReadOnlyObject } from "./ReadOnlyObject";

/**
 * Guarded filterer function.
 *
 * @template Item Type of the items in the source array.
 * @template Filtered Type of filtered items.
 */
export type GuardedFilterer<Item, Filtered extends Item> = (
	item: ReadOnlyObject<Item>
) => item is ReadOnlyObject<Filtered>;

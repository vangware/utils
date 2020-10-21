import { ReadOnlyObject } from "./ReadOnlyObject";

/**
 * Unguarded filter function.
 *
 * @template Item Type of the items in the source array.
 */
export type UnguardedFilterer<Item> = (item: ReadOnlyObject<Item>) => boolean;

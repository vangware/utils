import type { GuardedFilterer } from "./GuardedFilterer";
import type { UnguardedFilterer } from "./UnguardedFilterer";

/**
 * Filterer function.
 *
 * @template Item Type of the items in the source array.
 * @template Filtered Type of filtered items.
 */
export type Filterer<Item, Filtered extends Item> =
	| GuardedFilterer<Item, Filtered>
	| UnguardedFilterer<Item>;

import type { Filterer } from "../types/Filterer";
import type { FilterTuple } from "../types/FilterTuple";
import { arrayFilterIn } from "./arrayFilterIn";
import { arrayFilterOut } from "./arrayFilterOut";

/**
 * Takes a `filterer` and applies it to a `source` array returning a
 * `[matching, nonMatching]` tuple.
 *
 * @example
 * ```typescript
 * const filterEvenOdd = arrayFilterTuple((item: number) => item % 2 === 0);
 *
 * filterEvenOdd([0, 1, 2, 3]); // [[0, 2], [1, 3]]
 * ```
 * @template Item Type of items in source array.
 * @template Filtered Type of filtered items.
 * @param filterer Filterer function.
 * @returns Curried function with `filter` in context.
 */
export const arrayFilterTuple =
	<Item, Filtered extends Item>(filterer: Filterer<Item, Filtered>) =>
	/**
	 * @param source Source array to filter.
	 * @returns Tuple with shape `[filteredIn, filteredOut]`.
	 */
	(source: ReadonlyArray<Item>): FilterTuple<Item, Filtered> =>
		[arrayFilterIn(filterer)(source), arrayFilterOut(filterer)(source)];

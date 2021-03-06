import type { Filterer } from "../types/Filterer";
import type { OptionalExclude } from "../types/OptionalExclude";

/**
 * Takes a negative `filterer` and applies it to given `source` array.
 *
 * @example
 * ```typescript
 * const filterOutEven = arrayFilterOut((item: number) => item % 2 === 0);
 * const filterOutEmpty = arrayFilterOut((item: string) => item === "");
 *
 * filterOutEven([0, 1, 2, 3]); // [1, 3]
 * filterOutEmpty(["hello", "", "", "world"]); // ["hello", "world"]
 * ```
 * @template Item Type of items in source array.
 * @template Filtered Type of filtered items.
 * @param filterer Filterer out function.
 * @returns Curried function with `filter` set in context.
 */
export const arrayFilterOut =
	<Item, Filtered extends Item>(filterer: Filterer<Item, Filtered>) =>
	/**
	 * @param source Source array to filter.
	 * @returns Source array with filter applied (excluding `true` returning).
	 */
	(source: ReadonlyArray<Item>) =>
		source.filter(
			(item): item is OptionalExclude<Item, Filtered> => !filterer(item)
		);

import type { Filterer } from "../types/Filterer";
import type { ReadOnlyObject } from "../types/ReadOnlyObject";
import type { ReadOnlyObjectArray } from "../types/ReadOnlyObjectArray";

/**
 * Takes a positive `filterer` and applies it to given `source` array.
 *
 * @example
 * ```typescript
 * const filterInEven = arrayFilterIn((item: number) => item % 2 === 0);
 * const filterOutEmpty = arrayFilterIn((item: string) => item !== "");
 *
 * filterInEven([0, 1, 2, 3]); // [0, 2]
 * filterOutEmpty(["hello", "", "", "world"]); // ["hello", "world"]
 * ```
 * @template Item Type of items in source array.
 * @template Filtered Type of filtered items.
 * @param filterer Filterer function.
 * @returns Curried function with `filter` set in context.
 */
export const arrayFilterIn = <Item, Filtered extends Item>(
	filterer: Filterer<Item, Filtered>
) =>
	/**
	 * @param source Source array to filter.
	 * @returns Source array with filter applied (excluding `false` returning).
	 */
	(source: ReadOnlyObjectArray<Item>) =>
		source.filter((item): item is ReadOnlyObject<Filtered> =>
			filterer(item)
		);

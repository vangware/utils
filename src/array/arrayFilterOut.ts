import { Filterer } from "../types/Filterer";
import { ReadOnlyObjectArray } from "../types/ReadOnlyObjectArray";

/**
 * Takes a negative `filterer` and applies it to given `source` array.
 *
 * @example
 * ```typescript
 * const filterOutEven = arrayFilterOut(
 * 	(item: number): item is number => item % 2 === 0
 * );
 * const filterOutEmpty = arrayFilterOut(
 * 	(item: string): item is string => item === ""
 * );
 *
 * filterOutEven([0, 1, 2, 3]); // [1, 3]
 * filterOutEmpty(["hello", "", "", "world"]); // ["hello", "world"]
 * ```
 * @template Item Type of items in source array.
 * @template Filtered Type of filtered items.
 * @param filterer Filterer out function.
 * @returns Curried function with `filter` set in context.
 */
export const arrayFilterOut = <Item, Filtered extends Item = Item>(
	filterer: Filterer<Item, Filtered>
) =>
	/**
	 * @param source Source array to filter.
	 * @returns Source array with filter applied (excluding `true` returning).
	 */
	(source: ReadOnlyObjectArray<Item>) =>
		source.filter(
			(
				item
			): item is ReadOnlyObjectArray<
				Exclude<Item, Filtered> extends never
					? Filtered
					: Exclude<Item, Filtered>
			>[number] => !filterer(item)
		);

export default arrayFilterOut;

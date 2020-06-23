import { Filterer } from "../types/Filterer";
import ReadOnlyObjectArray from "../types/ReadOnlyObjectArray";

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
 * @param filterer Filterer function.
 * @returns Curried function with `filter` set in context.
 */
export const arrayFilterIn = <Item>(filterer: Filterer<Item>) =>
	/**
	 * @param source Source array to filter.
	 * @returns Source array with filter applied.
	 */
	(source: ReadOnlyObjectArray<Item>) =>
		source.filter(item => filterer(item));

export default arrayFilterIn;

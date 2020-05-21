import { arrayMap } from "./arrayMap";
import { objectFreeze } from "./objectFreeze";
import type { Filterer } from "./types/Filterer";

/**
 * Takes a positive `filterer` and applies it to given `source` array.
 *
 * @example
 * ```typescript
 * const filterInEven = arrayFilterIn<number>(item => item % 2 === 0);
 * const filterOutEmpty = arrayFilterIn<string>(item => item !== "");
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
	(source: readonly Item[]) =>
		objectFreeze(
			arrayMap<Item>(objectFreeze)(source).filter(item => filterer(item))
		);

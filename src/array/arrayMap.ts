import type { Mapper } from "../types/Mapper.js";

/**
 * Takes a `mapper` function and applies it to given `source` array.
 *
 * @example
 * ```typescript
 * const mapDouble = arrayMap((item: number) => item * 2);
 *
 * mapDouble([0, 1, 2, 3]); // [0, 2, 4, 6]
 * ```
 * @template Item Type of the items in the source array.
 * @template Output Type of the output (same as the input by default).
 * @param mapper Mapper function function.
 * @returns Curried function with `mapper` in context.
 */
export const arrayMap =
	<Item, Output = Item>(mapper: Mapper<Item, Output>) =>
	/**
	 * @param source Source array to be mapped.
	 * @returns Copy of source with mapped values using `mapper`.
	 */
	(source: ReadonlyArray<Item>) =>
		source.map(item => mapper(item));

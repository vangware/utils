import type { Filterer } from "../types/Filterer";

/**
 * Curried wrapper for `Array.prototype.every`.
 *
 * @example
 * ```typescript
 * const everyNumber = arrayEvery(isNumber);
 * everyNumber([0, 1, 2]); // true
 * everyNumber([0, 1, "foo", 2]); // false
 * ```
 * @template Item Type of items in source array.
 * @template Predicated Type of predicated items.
 * @param predicate Function predicate to test every item.
 * @returns Curried function with `predicate` in context.
 */
export const arrayEvery = <Item, Predicated extends Item>(
	predicate: Filterer<Item, Predicated>
) =>
	/**
	 * @param source Source array to be tested.
	 */
	(source: readonly Item[]): source is readonly Predicated[] =>
		source.every(predicate);

import type { Filterer } from "../types/Filterer";

/**
 * Curried wrapper for `Array.prototype.some`.
 *
 * @example
 * ```typescript
 * const someNumber = arraySome(isNumber);
 * someNumber([0, 1, 2]); // true
 * someNumber([0, 1, "foo", 2]); // true
 * someNumber(["foo", "bar"]); // false
 * ```
 * @template Item Type of items in source array.
 * @template Predicated Type of predicated items.
 * @param predicate Function predicate to test until some item of the type.
 * @returns Curried function with `predicate` in context.
 */
export const arraySome = <Item, Predicated extends Item>(
	predicate: Filterer<Item, Predicated>
) =>
	/**
	 * @param source Source array to be tested.
	 */
	(source: readonly Item[]): source is readonly (Item | Predicated)[] =>
		source.some(predicate);

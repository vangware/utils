import { Filterer } from "../types/Filterer";
import { Tuple } from "../types/Tuple";
import { arrayFilterIn } from "./arrayFilterIn";
import { arrayFilterOut } from "./arrayFilterOut";

/**
 * Takes a `filterer` and applies it to a `source` array returning a
 * `[matching, nonMatching]` tuple.
 *
 * @example
 * ```typescript
 * const filterTupleTupleEvenOdd = arrayFilterTuple<number>(
 * 	item => item % 2 === 0
 * );
 *
 * filterTupleTupleEventOdd([0, 1, 2, 3]); // [[0, 2], [1, 3]]
 * ```
 * @template Item Type of items in source array.
 * @param filterer Filterer function.
 * @returns Curried function with `filter` in context.
 */
export const arrayFilterTuple = <Item>(filterer: Filterer<Item>) =>
	/**
	 * @param source Source array to filter.
	 * @returns Tuple with shape `[matching, nonMatching]`.
	 */
	(source: readonly Item[]): Tuple<readonly Item[]> => [
		arrayFilterIn(filterer)(source),
		arrayFilterOut(filterer)(source)
	];

export default arrayFilterTuple;

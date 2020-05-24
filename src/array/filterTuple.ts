import type { Filterer } from "../types/Filterer";
import type { Tuple } from "../types/Tuple";
import { filterIn } from "./filterIn";
import { filterOut } from "./filterOut";

/**
 * Takes a `filterer` and applies it to a `source` array returning a
 * `[matching, nonMatching]` tuple.
 *
 * @example
 * ```typescript
 * const filterTupleEvenOdd = filterTuple<number>(item => item % 2 === 0);
 *
 * filterTupleEventOdd([0, 1, 2, 3]); // [[0, 2], [1, 3]]
 * ```
 * @template Item Type of items in source array.
 * @param filterer Filterer function.
 * @returns Curried function with `filter` in context.
 */
export const filterTuple = <Item>(filterer: Filterer<Item>) =>
	/**
	 * @param source Source array to filter.
	 * @returns Tuple with shape `[matching, nonMatching]`.
	 */
	(source: readonly Item[]): Tuple<readonly Item[]> => [
		filterIn(filterer)(source),
		filterOut(filterer)(source)
	];

export default filterTuple;

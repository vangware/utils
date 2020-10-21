import { ReadOnlyObject } from "../types/ReadOnlyObject";
import { ReadOnlyObjectArray } from "../types/ReadOnlyObjectArray";
import { Reducer } from "../types/Reducer";

/**
 * Takes a `reducer` and an `initialValue` and applies it to `source` array.
 *
 * @example
 * ```typescript
 * const sum = arrayReduce<number, number>(total => item => total + item);
 * const sumStartingInZero = sum(0);
 * const sumStartingInTwo = sum(2);
 *
 * sumStartingInZero([1, 2, 3]); // 6
 * sumStartingInTwo([1, 2, 3]); // 8
 * ```
 * @template Item Type of the items in the source array.
 * @template Output Type of the output (an array of `Input` by default).
 * @returns Curried function with `reducer` in context.
 */
export const arrayReduce = <Item, Output = ReadOnlyObjectArray<Item>>(
	reducer: Reducer<Item, Output>
) =>
	/**
	 * @param initialValue Initial value for reducer.
	 * @returns Curried function with `reducer` and `initialValue` in context.
	 */
	(initialValue: ReadOnlyObject<Output>) =>
		/**
		 * @param source Source array to be reduced.
		 * @returns Reduced value using `reducer` and `initialValue`.
		 */
		(source: ReadOnlyObjectArray<Item>): ReadOnlyObject<Output> =>
			source.reduce(
				(accumulator, item) => reducer(accumulator)(item),
				initialValue
			);

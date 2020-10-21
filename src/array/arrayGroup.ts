import { Grouped } from "../types/Grouped";
import { Grouper } from "../types/Grouper";
import { arrayInsertLast } from "./arrayInsertLast";
import { arrayReduce } from "./arrayReduce";

/**
 * Takes `grouper` and applies it to given `source` array.
 *
 * @example
 * ```typescript
 * const groupEvenOdd = arrayGroup(
 * 	(item: number) => item % 2 === 0 "even" : "odd"
 * );
 *
 * groupEvenOdd([0, 1, 2, 3]); // { even: [0, 2], odd: [1, 3] }
 * ```
 * @template Item Type of items in source array.
 * @param grouper Grouper function.
 * @returns Curried function with `grouper` in context.
 */
export const arrayGroup = <Item>(grouper: Grouper<Item>) =>
	arrayReduce<Item, Grouped<Item>>(groups => item =>
		(groupName => ({
			...groups,
			[groupName]: arrayInsertLast(item)(groups[groupName] || [])
		}))(`${grouper(item)}`)
	)({});

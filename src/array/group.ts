import type { Grouped } from "../types/Grouped";
import type { Grouper } from "../types/Grouper";
import { push } from "./push";
import { reduce } from "./reduce";

/**
 * Takes `grouper` and applies it to given `source` array.
 *
 * @example
 * ```typescript
 * const evenOddGroup = group<number>(
 * 	item => item % 2 === 0 "even" : "odd"
 * );
 *
 * evenOddGroup([0, 1, 2, 3]); // { even: [0, 2], odd: [1, 3] }
 * ```
 * @template Item Type of items in source array.
 * @param grouper Grouper function.
 * @returns Curried function with `grouper` in context.
 */
export const group = <Item>(grouper: Grouper<Item>) =>
	reduce<Item, Grouped<Item>>(groups => item =>
		(groupName => ({
			...groups,
			[groupName]: push(item)(groups[groupName] || [])
		}))(`${grouper(item)}`)
	)({});

export default group;

import arrayPush from "../arrayPush";
import arrayReduce from "../arrayReduce";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import ArrayGroupFunction from "./ArrayGroupFunction";

/**
 * Creates object with properties grouped by grouper function.
 *
 * @param target - Target array.
 * @param grouper - Grouper function (returns the group name).
 * @returns An object with the shape `{ [group]: [items] }`.
 */
export const arrayGroup: ArrayGroupFunction = (target, grouper) =>
	arrayReduce(
		target,
		(groups, item, index, array) =>
			(group => ({
				...groups,
				[group]: arrayPush(groups[group] ?? EMPTY_ARRAY, item)
			}))(`${grouper(item, index, array)}`),
		EMPTY_OBJECT
	);

export default arrayGroup;

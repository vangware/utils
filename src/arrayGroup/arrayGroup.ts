import arrayReduce from "../arrayReduce";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import isArray from "../isArray";
import ArrayGroupFunction from "./ArrayGroupFunction";

/**
 * Creates object with properties grouped by grouper function.
 * @param array Target array.
 * @param grouper Grouper function (returns the group name).
 */
export const arrayGroup: ArrayGroupFunction = (array, grouper) =>
	arrayReduce(
		array,
		(output, item) =>
			(group => ({
				...output,
				[group]: [
					...(isArray(output[group]) ? output[group] : EMPTY_ARRAY),
					item
				]
			}))(`${grouper(item)}`),
		EMPTY_OBJECT
	);

export default arrayGroup;

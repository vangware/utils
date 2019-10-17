import arrayReduce from "../arrayReduce";
import typeOf from "../typeOf";
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
					...(typeOf(output[group]).isArray ? output[group] : []),
					item
				]
			}))(`${grouper(item)}`),
		{}
	);

export default arrayGroup;

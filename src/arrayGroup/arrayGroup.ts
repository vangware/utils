import ArrayGroupFunction from "./ArrayGroupFunction";

/**
 * Creates object with properties grouped by grouper function.
 * @param array Target array.
 * @param grouper Grouper function (returns the group name).
 */
export const arrayGroup: ArrayGroupFunction = (array, grouper) =>
	array.reduce(
		(output, item) =>
			(group => ({
				...output,
				[group]: [...(output[group] || []), item]
			}))(`${grouper(item)}`),
		{}
	);

export default arrayGroup;

import arrayReduce from "../arrayReduce";
import { EMPTY_ARRAY } from "../constants";
import ArraySplitFilterFilter from "./ArraySplitFilterFilter";
import ArraySplitFilterFunction from "./ArraySplitFilterFunction";

/**
 * Split array into two arrays based on a filter.
 *
 * @param target - Target array.
 * @param filter - Filter function.
 * @returns Array of 2 elements (the true values, and the false values).
 */
export const arraySplitFilter: ArraySplitFilterFunction = <ItemType>(
	target: ItemType[],
	filter: ArraySplitFilterFilter<ItemType>
) =>
	arrayReduce(
		target,
		([trueValues, falseValues], item, index, array) =>
			filter(item, index, array)
				? [[...trueValues, item], falseValues]
				: [trueValues, [...falseValues, item]],
		[EMPTY_ARRAY as ItemType[], EMPTY_ARRAY as ItemType[]]
	);

export default arraySplitFilter;

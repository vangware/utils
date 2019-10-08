import ArraySplitFilterFilter from "./ArraySplitFilterFilter";
import ArraySplitFilterFunction from "./ArraySplitFilterFunction";

/**
 * Split array into two arrays based on a filter.
 * @param target Target array.
 * @param filter Filter function.
 * @returns Array of 2 elements (the true values, and the false values).
 */
export const arraySplitFilter: ArraySplitFilterFunction = <ItemType>(
	target: ItemType[],
	filter: ArraySplitFilterFilter<ItemType>
) =>
	target.reduce(
		([trueValues, falseValues], item, index, array) =>
			filter(item, index, array)
				? [[...trueValues, item], falseValues]
				: [trueValues, [...falseValues, item]],
		[[] as ItemType[], [] as ItemType[]]
	);

export default arraySplitFilter;

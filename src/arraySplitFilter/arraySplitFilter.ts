/**
 * Split array into two arrays based on a filter.
 * @param target Target array.
 * @param filter Filter function.
 * @returns Array of 2 elements (the true values, and the false values).
 */
export const arraySplitFilter = <ItemType>(
	target: ItemType[] = [],
	filter: (
		item: ItemType,
		index: number,
		array: ItemType[]
	) => boolean = () => true
) =>
	target.reduce(
		([trueValues = [], falseValues = []], item, ...props) =>
			filter(item, ...props)
				? [[...trueValues, item], falseValues]
				: [trueValues, [...falseValues, item]],
		[] as ItemType[][]
	);

export default arraySplitFilter;

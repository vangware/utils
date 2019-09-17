/**
 * Creates object with properties grouping by grouper function.
 * @param array Target array.
 * @param grouper Grouper function (returns the group name).
 */
export const arrayGroup = <ItemType>(
	array: ItemType[],
	grouper: (item: ItemType) => string | number
): { [group: string]: ItemType[] } =>
	array.reduce(
		(output, namespace) =>
			(group => ({
				...output,
				[group]: [...(output[group] || []), namespace]
			}))(`${grouper(namespace)}`),
		{}
	);

export default arrayGroup;

/**
 * Array.prototype.map wrapper that can take an undefined value.
 * @param array Target array.
 * @param callback Map callback (to be called for every array item).
 */
export const arrayMap = <ItemType, OutputType = ItemType>(
	array: ItemType[],
	callback: (
		value: ItemType,
		index: number,
		array: ItemType[]
	) => OutputType = value => (value as unknown) as OutputType
): OutputType[] =>
	Array.isArray(array) ? array.map(callback) : ([] as OutputType[]);

export default arrayMap;

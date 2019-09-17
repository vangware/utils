/**
 * Replace value in array at given index.
 * @param array Target array.
 * @param callback Map callback (to be called for every array item).
 */
export const arrayReplace = <ItemType>(
	array: ItemType[] = [],
	index: number = array.length - 1,
	...items: ItemType[]
) => [...array.slice(0, index), ...items, ...array.slice(index + items.length)];

export default arrayReplace;

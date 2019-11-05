import ArrayReplaceFunction from "./ArrayReplaceFunction";

/**
 * Replace value in array at given index.
 *
 * @param array - Target array.
 * @param index - Index to start replacing items.
 * @param items - Items to be inserted.
 * @returns Array with replaced elements.
 */
export const arrayReplace: ArrayReplaceFunction = (array, index, ...items) =>
	(replacePoint => [
		...array.slice(0, replacePoint),
		...items,
		...array.slice(replacePoint + items.length)
	])(index < 0 ? array.length + index : index);

export default arrayReplace;

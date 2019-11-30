import ArrayReplaceFunction from "./ArrayReplaceFunction";

/**
 * Replace value in array at given index.
 *
 * @param array - Target array.
 * @param index - Index to start replace item.
 * @param item - Replacing item.
 * @returns Array with replaced elements.
 */
export const arrayReplace: ArrayReplaceFunction = (array, index, item) =>
	(replacePoint => [
		...array.slice(0, replacePoint),
		item,
		...array.slice(replacePoint + 1)
	])(index < 0 ? array.length + index : index);

export default arrayReplace;

import ArrayInsertFunction from "./ArrayInsertFunction";

/**
 * Insert value in array at given index.
 *
 * @param array - Target array.
 * @param index - Index to insert item.
 * @param item - Item to be inserted.
 * @returns New array with inserted values in it.
 */
export const arrayInsert: ArrayInsertFunction = (array, index, item) =>
	(insertionPoint => [
		...array.slice(0, insertionPoint),
		item,
		...array.slice(insertionPoint)
	])(index < 0 ? array.length + index : index);

export default arrayInsert;

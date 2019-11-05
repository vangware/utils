import ArrayInsertFunction from "./ArrayInsertFunction";

/**
 * Insert value in array at given index.
 *
 * @param array - Target array.
 * @param index - Index to start inserting items.
 * @param items - Items to be inserted.
 * @returns New array with inserted values in it.
 */
export const arrayInsert: ArrayInsertFunction = (array, index, ...items) =>
	(insertionPoint => [
		...array.slice(0, insertionPoint),
		...items,
		...array.slice(insertionPoint)
	])(index < 0 ? array.length + index : index);

export default arrayInsert;

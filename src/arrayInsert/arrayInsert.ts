import arraySlice from "../arraySlice";
import ArrayInsertFunction from "./ArrayInsertFunction";

/**
 * Insert value in array at given index.
 *
 * @param target - Target array.
 * @param index - Index to insert item.
 * @param item - Item to be inserted.
 * @returns New array with inserted values in it.
 */
export const arrayInsert: ArrayInsertFunction = (target, index, item) =>
	(insertionPoint => [
		...arraySlice(target, 0, insertionPoint),
		item,
		...arraySlice(target, insertionPoint)
	])(index < 0 ? target.length + index : index);

export default arrayInsert;

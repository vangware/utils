import arrayInsert from "../arrayInsert";
import ArrayPushFunction from "./ArrayPushFunction";

/**
 * Insert given items at the end of given array.
 *
 * @param array - Target array.
 * @param items - Items to be inserted.
 * @returns New array with inserted values in it.
 */
export const arrayPush: ArrayPushFunction = (array, ...items) =>
	arrayInsert(array, array.length, ...items);

export default arrayPush;

import arrayInsert from "../arrayInsert";
import ArrayPushFunction from "./ArrayPushFunction";

/**
 * Insert given item at the end of given array.
 *
 * @param target - Target array.
 * @param item - Item to be inserted.
 * @returns New array with inserted values in it.
 */
export const arrayPush: ArrayPushFunction = (target, item) =>
	arrayInsert(target, target.length, item);

export default arrayPush;

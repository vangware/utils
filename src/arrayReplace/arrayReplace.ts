import arraySlice from "../arraySlice";
import objectFreeze from "../objectFreeze";
import ArrayReplaceFunction from "./ArrayReplaceFunction";

/**
 * Replace value in array at given index.
 *
 * @param target - Target array.
 * @param index - Index to start replace item.
 * @param item - Replacing item.
 * @returns Array with replaced elements.
 */
export const arrayReplace: ArrayReplaceFunction = (target, index, item) => {
	const replacePoint = index < 0 ? target.length + index : index;

	return objectFreeze([
		...arraySlice(target, 0, replacePoint),
		item,
		...arraySlice(target, replacePoint + 1)
	]);
};

export default arrayReplace;

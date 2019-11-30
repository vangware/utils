import arrayReduce from "../arrayReduce";
import arrayReplace from "../arrayReplace";
import { EMPTY_ARRAY } from "../constants";
import isArray from "../isArray";
import ArraySplitFunction from "./ArraySplitFunction";

/**
 * Split array into multiple arrays of the given size.
 *
 * @param array - Target array.
 * @param length - Size of every piece.
 * @param vertical - Changes the orientation of the split.
 * @returns Array of arrays of the given length.
 */
export const arraySplit: ArraySplitFunction = <ItemType>(
	array: readonly ItemType[],
	length: number,
	vertical: boolean = false
) =>
	arrayReduce(
		array,
		(output, item, index) =>
			(arrayIndex =>
				arrayReplace(output, arrayIndex, [
					...(isArray(output[arrayIndex])
						? output[arrayIndex]
						: EMPTY_ARRAY),
					item
				]))(Math.floor(vertical ? index % length : index / length)),
		EMPTY_ARRAY as readonly (readonly ItemType[])[]
	);

export default arraySplit;

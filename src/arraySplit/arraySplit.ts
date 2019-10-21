import arrayReduce from "../arrayReduce";
import arrayReplace from "../arrayReplace";
import isArray from "../isArray";
import ArraySplitFunction from "./ArraySplitFunction";

/**
 * Split array into multiple arrays of the given size.
 * @param array Target array.
 * @param length Size of every piece.
 * @param vertical Changes the orientation of the split.
 * @returns Array of arrays of the given length.
 */
export const arraySplit: ArraySplitFunction = <ItemType>(
	array: ItemType[],
	length: number,
	vertical: boolean = false
) =>
	arrayReduce(
		array,
		(output, item, index) =>
			(arrayIndex =>
				arrayReplace(output, arrayIndex, [
					...(isArray(output[arrayIndex]) ? output[arrayIndex] : []),
					item
				]))(Math.floor(vertical ? index % length : index / length)),
		[] as ItemType[][]
	);

export default arraySplit;

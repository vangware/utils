import arrayReduce from "../arrayReduce";
import { EMPTY_ARRAY } from "../constants";
import ArrayFilterTupleFilter from "./ArrayFilterTupleFilter";
import ArrayFilterTupleFunction from "./ArrayFilterTupleFunction";

/**
 * Like Array.prototype.filter, but returns a tuple [matching, notMatching].
 *
 * @param target - Target array.
 * @param filter - Filter function.
 * @returns Array of 2 elements (the matching and the non matching values).
 */
export const arrayFilterTuple: ArrayFilterTupleFunction = <ItemType>(
	target: readonly ItemType[],
	filter: ArrayFilterTupleFilter<ItemType>
) =>
	arrayReduce(
		target,
		([trueValues, falseValues], item, index, array) =>
			filter(item, index, array)
				? [[...trueValues, item], falseValues]
				: [trueValues, [...falseValues, item]],
		[EMPTY_ARRAY as readonly ItemType[], EMPTY_ARRAY as readonly ItemType[]]
	);

export default arrayFilterTuple;

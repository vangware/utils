import arrayFilter from "../arrayFilter/arrayFilter";
import objectFreeze from "../objectFreeze";
import type ArrayFilterTupleFunction from "./ArrayFilterTupleFunction";

/**
 * Like Array.prototype.filter, but returns a tuple [matching, notMatching].
 *
 * @param target - Target array.
 * @param filter - Filter function.
 * @returns Array of 2 elements (the matching and the non matching values).
 */
export const arrayFilterTuple: ArrayFilterTupleFunction = (target, filter) =>
	objectFreeze([
		arrayFilter(target, filter),
		arrayFilter(target, (item, index, array) => !filter(item, index, array))
	]);

export default arrayFilterTuple;

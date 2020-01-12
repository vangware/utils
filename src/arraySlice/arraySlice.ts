import { EMPTY_ARRAY } from "../constants";
import isArray from "../isArray";
import objectFreeze from "../objectFreeze";
import ArraySliceFunction from "./ArraySliceFunction";

/**
 * Array.prototype.slice wrapper.
 *
 * @param target - Target array.
 * @param start - Slice start.
 * @param end - Slice end.
 * @returns A slice of the given array (from start to end).
 */
export const arraySlice: ArraySliceFunction = (
	target,
	start = 0,
	end = target.length
) => (isArray(target) ? objectFreeze(target.slice(start, end)) : EMPTY_ARRAY);

export default arraySlice;

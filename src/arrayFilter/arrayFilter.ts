import { EMPTY_ARRAY } from "../constants";
import isArray from "../isArray";
import ArrayFilterFunction from "./ArrayFilterFunction";

/**
 * Array.prototype.filter wrapper.
 *
 * @param target - Target array.
 * @param filter - Filter function.
 * @returns An array of elements matching the given filter.
 */
export const arrayFilter: ArrayFilterFunction = (target, filter = _ => true) =>
	isArray(target) ? target.filter(filter) : EMPTY_ARRAY;

export default arrayFilter;

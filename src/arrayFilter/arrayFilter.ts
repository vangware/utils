import { EMPTY_ARRAY } from "../constants";
import isArray from "../isArray";
import objectFreeze from "../objectFreeze";
import ArrayFilterFunction from "./ArrayFilterFunction";

/**
 * Array.prototype.filter wrapper.
 *
 * @param target - Target array.
 * @param filter - Filter function.
 * @returns An array of elements matching the given filter.
 */
export const arrayFilter: ArrayFilterFunction = (
	target,
	filter = _ => true
) => {
	const frozenTarget = isArray(target) ? objectFreeze(target) : EMPTY_ARRAY;

	return objectFreeze(
		frozenTarget.filter((item, index) =>
			filter(objectFreeze(item), index, frozenTarget)
		)
	);
};

export default arrayFilter;

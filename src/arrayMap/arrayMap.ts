import { EMPTY_ARRAY } from "../constants";
import isArray from "../isArray";
import objectFreeze from "../objectFreeze";
import ArrayMapFunction from "./ArrayMapFunction";

/**
 * Array.prototype.map wrapper that can take an undefined value.
 *
 * @param target - Target array.
 * @param mapper - Map callback (to be called for every array item).
 * @returns Mapped array.
 */
export const arrayMap: ArrayMapFunction = (target, mapper) => {
	const frozenTarget = isArray(target) ? objectFreeze(target) : EMPTY_ARRAY;

	return objectFreeze(
		frozenTarget.map((item, index) =>
			mapper(objectFreeze(item), index, frozenTarget)
		)
	);
};

export default arrayMap;

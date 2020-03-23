import isArray from "../isArray";
import objectFreeze from "../objectFreeze";
import type ArrayReduceFunction from "./ArrayReduceFunction";

/**
 * Array.prototype.reduce wrapper that can take an undefined value.
 *
 * @param target - Target array.
 * @param reducer - Map callback (to be called for every array item).
 * @param initialValue - Initial value of reducer.
 * @returns Reduced value.
 */
export const arrayReduce: ArrayReduceFunction = (
	target,
	reducer,
	initialValue
) => {
	const frozenTarget = objectFreeze(target);

	return objectFreeze(
		isArray(target)
			? target.reduce(
					(previousValue, item, index) =>
						reducer(
							objectFreeze(previousValue),
							objectFreeze(item),
							index,
							frozenTarget
						),
					initialValue
			  )
			: initialValue
	);
};

export default arrayReduce;

import isArray from "../isArray";
import ArrayReduceFunction from "./ArrayReduceFunction";

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
) => (isArray(target) ? target.reduce(reducer, initialValue) : initialValue);

export default arrayReduce;

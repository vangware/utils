import isArray from "../isArray";
import ArrayReduceFunction from "./ArrayReduceFunction";

/**
 * Array.prototype.reduce wrapper that can take an undefined value.
 *
 * @param array - Target array.
 * @param reducer - Map callback (to be called for every array item).
 * @param initialValue - Initial value of reducer.
 * @returns Reduced value.
 */
export const arrayReduce: ArrayReduceFunction = (
	array,
	reducer,
	initialValue
) => (isArray(array) ? array.reduce(reducer, initialValue) : initialValue);

export default arrayReduce;

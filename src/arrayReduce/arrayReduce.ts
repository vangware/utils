import typeOf from "../typeOf";
import ArrayReduceFunction from "./ArrayReduceFunction";

/**
 * Array.prototype.reduce wrapper that can take an undefined value.
 * @param array Target array.
 * @param reducer Map callback (to be called for every array item).
 * @param initialValue Initial value of reducer (returned if array is invalid).
 */
export const arrayReduce: ArrayReduceFunction = (
	array,
	reducer,
	initialValue
) =>
	typeOf(array).isArray ? array.reduce(reducer, initialValue) : initialValue;

export default arrayReduce;

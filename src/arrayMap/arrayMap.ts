import isArray from "../isArray";
import ArrayMapFunction from "./ArrayMapFunction";

/**
 * Array.prototype.map wrapper that can take an undefined value.
 * @param array Target array.
 * @param mapper Map callback (to be called for every array item).
 */
export const arrayMap: ArrayMapFunction = (array, mapper) =>
	isArray(array) ? array.map(mapper) : [];

export default arrayMap;

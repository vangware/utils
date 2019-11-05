import { EMPTY_ARRAY } from "../constants";
import isArray from "../isArray";
import ArrayMapFunction from "./ArrayMapFunction";

/**
 * Array.prototype.map wrapper that can take an undefined value.
 *
 * @param array - Target array.
 * @param mapper - Map callback (to be called for every array item).
 * @returns Mapped array.
 */
export const arrayMap: ArrayMapFunction = (array, mapper) =>
	isArray(array) ? array.map(mapper) : EMPTY_ARRAY;

export default arrayMap;

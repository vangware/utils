import isInstanceOf from "../isInstanceOf";
import PrimitiveString from "./PrimitiveString";

/**
 * Check if given value is instance of String.
 * @param value Value to check.
 */
export const isString = <ValueType = unknown>(
	value: ValueType | string
): value is string => isInstanceOf(value, PrimitiveString);

export default isString;

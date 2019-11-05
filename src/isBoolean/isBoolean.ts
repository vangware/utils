import isInstanceOf from "../isInstanceOf";
import PrimitiveBoolean from "./PrimitiveBoolean";

/**
 * Check if given value is an instance of Boolean.
 *
 * @param value - Value to check.
 * @returns True if is a Boolean, false if not.
 */
export const isBoolean = <ValueType = unknown>(
	value: ValueType | boolean
): value is boolean => isInstanceOf(value, PrimitiveBoolean);

export default isBoolean;

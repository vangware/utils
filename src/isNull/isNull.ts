import isInstanceOf from "../isInstanceOf";
import PrimitiveNull from "./PrimitiveNull";

/**
 * Check if given value is null.
 *
 * @param value - Value to check.
 * @returns True if is a null, false if not.
 */
export const isNull = <ValueType = unknown>(
	value: ValueType | null
): value is null => isInstanceOf(value, PrimitiveNull);

export default isNull;

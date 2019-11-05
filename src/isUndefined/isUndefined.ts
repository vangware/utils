import isInstanceOf from "../isInstanceOf";
import PrimitiveUndefined from "./PrimitiveUndefined";

/**
 * Check if given value is undefined.
 *
 * @param value - Value to check.
 * @returns True if is undefined, false if not.
 */
export const isUndefined = <ValueType = unknown>(
	value: ValueType | undefined
): value is undefined => isInstanceOf(value, PrimitiveUndefined);

export default isUndefined;

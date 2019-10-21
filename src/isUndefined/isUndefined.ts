import isInstanceOf from "../isInstanceOf";
import PrimitiveUndefined from "./PrimitiveUndefined";

/**
 * Check if given value is undefined.
 * @param value Value to check.
 */
export const isUndefined = <ValueType = unknown>(
	value: ValueType | undefined
): value is undefined => isInstanceOf(value, PrimitiveUndefined);

export default isUndefined;

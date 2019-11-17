import isNull from "../isNull/isNull";
import isUndefined from "../isUndefined";

/**
 * Check if given value is null or undefined.
 *
 * @param value - Value to check.
 * @returns True if is a null or undefined, false if not.
 */
export const isNullish = <ValueType = unknown>(
	value: ValueType | null | undefined
): value is null | undefined => isNull(value) || isUndefined(value);

export default isNullish;

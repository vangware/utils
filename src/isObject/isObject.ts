import isNull from "../isNull";

/**
 * Check if given value is instance of Object (and is not null).
 *
 * @param value Value to check.
 * @returns True if is an object, false if not.
 */
export const isObject = <ValueType = unknown>(
	value: ValueType
): value is Extract<ValueType, object> =>
	!isNull(value) && typeof value === "object";

export default isObject;

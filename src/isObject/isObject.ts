import isInstanceOf from "../isInstanceOf";
import PrimitiveObject from "./PrimitiveObject";

/**
 * Check if given value is instance of Object (and is not null).
 * @param value Value to check.
 */
export const isObject = <ValueType = unknown>(
	value: ValueType
): value is Extract<ValueType, object> => isInstanceOf(value, PrimitiveObject);

export default isObject;

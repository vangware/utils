import isInstanceOf from "../isInstanceOf";
import PrimitiveNumber from "./PrimitiveNumber";

/**
 * Check if given value is instance of Number.
 * @param value Value to check.
 */
export const isNumber = <ValueType = unknown>(
	value: ValueType | number
): value is number => isInstanceOf(value, PrimitiveNumber);

export default isNumber;

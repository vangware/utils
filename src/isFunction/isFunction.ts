import isInstanceOf from "../isInstanceOf";
import PrimitiveFunction from "./PrimitiveFunction";

/**
 * Check if given value is an instance of Function.
 * @param value Value to check.
 */
export const isFunction = <ValueType = unknown>(
	// tslint:disable-next-line: ban-types
	value: ValueType | Function
	// tslint:disable-next-line: ban-types
): value is Function => isInstanceOf(value, PrimitiveFunction);

export default isFunction;

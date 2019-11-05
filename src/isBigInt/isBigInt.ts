import isInstanceOf from "../isInstanceOf";
import PrimitiveBigInt from "./PrimitiveBigInt";

/**
 * Check if given value is an instance of BigInt.
 *
 * @param value - Value to check.
 * @returns True if is a BigInt, false if not.
 */
export const isBigInt = <ValueType = unknown>(
	value: ValueType | BigInt
): value is BigInt => isInstanceOf(value, PrimitiveBigInt);

export default isBigInt;

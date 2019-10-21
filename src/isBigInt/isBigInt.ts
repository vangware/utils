import isInstanceOf from "../isInstanceOf";
import PrimitiveBigInt from "./PrimitiveBigInt";

/**
 * Check if given value is an instance of BigInt.
 * @param value Value to check.
 */
export const isBigInt = <ValueType = unknown>(
	value: ValueType | BigInt
): value is BigInt => isInstanceOf(value, PrimitiveBigInt);

export default isBigInt;

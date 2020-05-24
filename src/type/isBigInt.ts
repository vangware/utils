import { isType } from "./isType";

/**
 * Check if given `entity` is an instance of `BigInt`.
 */
export const isBigInt = isType<BigInt>("bigint");

export default isBigInt;

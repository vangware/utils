import { isType } from "./isType.js";

/**
 * Check if given `entity` is an instance of `BigInt`.
 */
export const isBigInt = isType<BigInt>("bigint");

import type isBigInt from "./isBigInt";

// Type predicates with arrow functions can't be extracted.
export type IsBigIntFunction = typeof isBigInt;

export default IsBigIntFunction;

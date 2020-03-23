import type isRegExp from "./isRegExp";

// Type predicates with arrow functions can't be extracted.
export type IsRegExpFunction = typeof isRegExp;

export default IsRegExpFunction;

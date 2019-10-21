import isNull from "./isNull";

// Type predicates with arrow functions can't be extracted.
export type IsNullFunction = typeof isNull;

export default IsNullFunction;

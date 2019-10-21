import isString from "./isString";

// Type predicates with arrow functions can't be extracted.
export type IsStringFunction = typeof isString;

export default IsStringFunction;

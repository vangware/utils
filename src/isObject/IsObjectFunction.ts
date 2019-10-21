import isObject from "./isObject";

// Type predicates with arrow functions can't be extracted.
export type IsStringFunction = typeof isObject;

export default IsStringFunction;

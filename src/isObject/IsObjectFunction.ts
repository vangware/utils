import isObject from "./isObject";

// Type predicates with arrow functions can't be extracted.
export type IsObjectFunction = typeof isObject;

export default IsObjectFunction;

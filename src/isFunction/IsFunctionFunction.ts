import isFunction from "./isFunction";

// Type predicates with arrow functions can't be extracted.
export type IsFunctionFunction = typeof isFunction;

export default IsFunctionFunction;

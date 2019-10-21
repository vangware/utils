import isUndefined from "./isUndefined";

// Type predicates with arrow functions can't be extracted.
export type IsUndefinedFunction = typeof isUndefined;

export default IsUndefinedFunction;

import isArray from "./isArray";

// Type predicates with arrow functions can't be extracted.
export type IsArrayFunction = typeof isArray;

export default IsArrayFunction;

import isWeakSet from "./isWeakSet";

// Type predicates with arrow functions can't be extracted.
export type IsWeakSetFunction = typeof isWeakSet;

export default IsWeakSetFunction;

import isWeakMap from "./isWeakMap";

// Type predicates with arrow functions can't be extracted.
export type IsWeakMapFunction = typeof isWeakMap;

export default IsWeakMapFunction;

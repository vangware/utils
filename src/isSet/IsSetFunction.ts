import isSet from "./isSet";

// Type predicates with arrow functions can't be extracted.
export type IsSetFunction = typeof isSet;

export default IsSetFunction;

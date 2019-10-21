import isNumber from "./isNumber";

// Type predicates with arrow functions can't be extracted.
export type IsNumberFunction = typeof isNumber;

export default IsNumberFunction;

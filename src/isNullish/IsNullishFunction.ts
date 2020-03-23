import type isNullish from "./isNullish";

// Type predicates with arrow functions can't be extracted.
export type IsNullishFunction = typeof isNullish;

export default IsNullishFunction;

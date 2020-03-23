import type isBoolean from "./isBoolean";

// Type predicates with arrow functions can't be extracted.
export type IsBooleanFunction = typeof isBoolean;

export default IsBooleanFunction;

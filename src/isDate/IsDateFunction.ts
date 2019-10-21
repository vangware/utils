import isDate from "./isDate";

// Type predicates with arrow functions can't be extracted.
export type IsDateFunction = typeof isDate;

export default IsDateFunction;

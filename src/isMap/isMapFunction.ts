import isMap from "./isMap";

// Type predicates with arrow functions can't be extracted.
export type IsMapFunction = typeof isMap;

export default IsMapFunction;

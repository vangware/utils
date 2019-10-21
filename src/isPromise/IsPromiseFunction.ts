import isMap from "./isPromise";

// Type predicates with arrow functions can't be extracted.
export type IsPromiseFunction = typeof isMap;

export default IsPromiseFunction;

import type isPromise from "./isPromise";

// Type predicates with arrow functions can't be extracted.
export type IsPromiseFunction = typeof isPromise;

export default IsPromiseFunction;

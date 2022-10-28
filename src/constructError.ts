import { construct } from "./construct.js";

/**
 * Functional alias for `new Error()`.
 */
export const constructError = construct(Error);

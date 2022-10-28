import { construct } from "./construct.js";

/**
 * Functional alias for `new ReferenceError()`.
 */
export const constructReferenceError = construct(ReferenceError);

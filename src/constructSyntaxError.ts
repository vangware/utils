import { construct } from "./construct.js";

/**
 * Functional alias for `new SyntaxError()`.
 */
export const constructSyntaxError = construct(SyntaxError);

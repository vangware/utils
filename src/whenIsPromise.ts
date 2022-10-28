import { isPromise } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is a `Promise`.
 */
export const whenIsPromise = when(isPromise);

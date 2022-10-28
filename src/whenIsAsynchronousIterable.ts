import { isAsynchronousIterable } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for when something is an `AsynchronousIterable`.
 *
 * @category Conditions
 */
export const whenIsAsynchronousIterable = when(isAsynchronousIterable);

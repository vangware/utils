import { isAsynchronousIterable } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for when something is an `AsynchronousIterable`.
 */
export const whenIsAsynchronousIterable = when(isAsynchronousIterable);

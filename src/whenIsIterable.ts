import { isIterable } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is an `Iterable`.
 */
export const whenIsIterable = when(isIterable);

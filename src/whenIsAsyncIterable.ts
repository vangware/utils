import { isAsyncIterable } from "@vangware/predicates";
import { when } from "./when.js";

/**
 * Conditional handler for  when something is an `AsyncIterable`.
 */
export const whenIsAsyncIterable = when(isAsyncIterable);

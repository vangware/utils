import { isType } from "./isType";

/**
 * Check if given `entity` is an instance of `Function`.
 */
export const isFunction = isType<Function>("function");

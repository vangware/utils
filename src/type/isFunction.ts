import { isType } from "./isType";

/**
 * Check if given `entity` is an instance of `Function`.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = isType<Function>("function");

import { isType } from "./isType";

/**
 * Check if given `entity` is an instance of `undefined`.
 */
export const isUndefined = isType<undefined>("undefined");

import { instanceOf } from "./instanceOf.js";

/**
 * Check if `entity` is an instance of `RegExp`.
 */
export const isRegExp = instanceOf<RegExp>(RegExp);

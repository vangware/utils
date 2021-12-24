import { instanceOf } from "./instanceOf.js";

/**
 * Check if given `entity` is an instance of `Date`.
 */
export const isDate = instanceOf<Date>(Date);

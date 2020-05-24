import { instanceOf } from "./instanceOf";

/**
 * Check if given `entity` is an instance of `Date`.
 */
export const isDate = instanceOf<Date>(Date);

export default isDate;

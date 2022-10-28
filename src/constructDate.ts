import { construct } from "./construct.js";

/**
 * Functional alias for `new Date()`.
 *
 * @category Classes
 */
export const constructDate = construct(Date) as (
	date?: Date | number | string,
) => Date;
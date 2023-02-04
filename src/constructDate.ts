import type { ReadOnlyDeep } from "@vangware/types";
import { construct } from "./construct.js";

/**
 * Functional alias for `new Date()`.
 *
 * @category Classes
 */
export const constructDate = construct(Date) as (
	date?: ReadOnlyDeep<Date> | number | string,
) => Date;

import { arrayMap } from "../array/arrayMap";
import { Entry } from "../types/Entry";
import { Mapper } from "../types/Mapper";
import { objectEntries } from "./objectEntries";
import { objectFromEntries } from "./objectFromEntries";

/**
 * Takes a `mapper` function and applies it to given `source` object using
 * `objectEntries` and `objectFromEntries`.
 *
 * @example
 * ```typescript
 * const mapDouble = objectMap(([key, value]) => [key, value * 2]);
 *
 * mapDouble({ a: 0, b: 1, c: 2, d: 3 }); // { a: 0, b: 2, c: 4, d: 6 }
 * ```
 * @template Input Type of the input object.
 * @template Output Type of the output object.
 * @param mapper Mapper function.
 * @returns Curried function with `mapper` in context.
 */
export const objectMap = <Input, Output = Input>(
	mapper: Mapper<Entry<Input>, Entry<Output>>
) =>
	/**
	 * @param source Source object to be mapped.
	 * @returns Copy of source with mapped values using `mapper`.
	 */
	(source: Input) =>
		objectFromEntries(arrayMap(mapper)(objectEntries(source)));

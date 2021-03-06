import type { Mapper } from "./Mapper";

/**
 * Reducer function.
 *
 * @template Item Type of the items in the source array.
 * @template Output Type of the output (same as the input by default).
 * @param accumulator Reducer accumulator.
 * @returns Mapper with accumulator context.
 */
export type Reducer<Item, Output = ReadonlyArray<Item>> = (
	accumulator: Output
) => Mapper<Item, Output>;

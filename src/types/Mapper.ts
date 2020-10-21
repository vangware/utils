import { ReadOnlyObject } from "./ReadOnlyObject";

/**
 * Mapper function.
 *
 * @template Item Type of the items in the source array.
 * @template Output Type of the output (same as the input by default).
 * @param item Item of the source array.
 * @returns Mapped value.
 */
export type Mapper<Item, Output> = (
	item: ReadOnlyObject<Item>
) => ReadOnlyObject<Output>;

import type { Mapper } from "./Mapper";
import type { ReadOnlyObject } from "./ReadOnlyObject";

/**
 * Sorter function.
 *
 * @param next Item following the current one.
 * @returns Mapped value.
 */
export type Sorter<Item> = (next: ReadOnlyObject<Item>) => Mapper<Item, number>;

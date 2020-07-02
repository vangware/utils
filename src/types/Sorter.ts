import { Mapper } from "./Mapper";
import { ReadOnlyObject } from "./ReadOnlyObject";

/**
 * Sorter function.
 *
 * @param next Item following the current one.
 * @returns Mapped value.
 */
export type Sorter<Item> = (next: ReadOnlyObject<Item>) => Mapper<Item, number>;

export default Sorter;

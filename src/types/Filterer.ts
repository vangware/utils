import { Mapper } from "./Mapper";

/**
 * `Mapper` that only returns `boolean` (used by filtering functions).
 *
 * @template Item Type of the items in the source array.
 */
export type Filterer<Item> = Mapper<Item, boolean>;

export default Filterer;

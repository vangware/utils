/**
 * 2-Tuple `[Item1, Item2]`
 *
 * @template Item1 First item type.
 * @template Item2 Second item item type (Same as `Item1` by default).
 */
export type Tuple<Item1, Item2 = Item1> = readonly [Item1, Item2];

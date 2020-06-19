/**
 * Readonly ArrayLike or Iterable alias.
 *
 * @template Item Type of items in the ArrayLike or Iterable.
 */
export type ArrayOrIterable<Item> = Readonly<ArrayLike<Item>> | Iterable<Item>;

export default ArrayOrIterable;

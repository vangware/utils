import type { ReadOnlyObject } from "./ReadOnlyObject";

/**
 * Readonly ArrayLike or Iterable alias.
 *
 * @template Item Type of items in the ArrayLike or Iterable.
 */
export type ArrayOrIterable<Item> =
	| ReadOnlyObject<ArrayLike<Item>>
	| Iterable<Item>;

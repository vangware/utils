import { arraySliceFrom } from "./arraySliceFrom";
import { arraySliceTo } from "./arraySliceTo";

/**
 * Takes an `index` and an `item` and replaces the `source` array item in that
 * `index` with the taken `item`.
 *
 * @example
 * ```typescript
 * const replaceLast = arrayReplace(Infinity);
 * const replaceFirst = arrayReplace(0);
 * const replaceItemLast = replaceLast("replacement");
 * const replaceItemFirst = replaceFirst("replacement");
 *
 * replaceItemLast([0, 1, 2, 3]); // [0, 1, 2, "replacement"]
 * replaceItemFirst([0, 1, 2, 3]); // ["replacement", 1, 2, 3]
 * ```
 *
 * @param index Index to start replace item.
 * @returns Curried function with `item` in context.
 */
export const arrayReplace =
	(index: number) =>
	/**
	 * @template Item Type of the item to be inserted.
	 * @param item Replacing item.
	 * @returns Curried function with `index` and `item` in context.
	 */
	<Item>(item: Item) =>
	/**
	 * @template SourceItem Type of items in source Array.
	 * @param source Source array to apply replace on.
	 * @returns Copy of array with added item in it.
	 */
	<SourceItem = Item>(source: ReadonlyArray<SourceItem>) =>
		index <= 0
			? [item, ...arraySliceFrom(1)(source)]
			: index >= source.length
			? [...arraySliceTo(-1)(source), item]
			: [
					...arraySliceTo(index)(source),
					item,
					...arraySliceFrom(index + 1)(source),
			  ];

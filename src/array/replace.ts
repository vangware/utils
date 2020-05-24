import { slice } from "./slice";

/**
 * Takes an `item` and an `index` and replaces the `source` array item in that
 * `index` with the taken `item`.
 *
 * @example
 * ```typescript
 * const replaceWithReplacement = replace("replacement");
 * const replaceItemLast = replaceWithReplacement(Infinity);
 * const replaceItemFirst = replaceWithReplacement(0);
 * const replaceItemSecond = replaceWithReplacement(1);
 *
 * replaceItemLast([0, 1, 2, 3]); // [0, 1, 2, "replacement"]
 * replaceItemFirst([0, 1, 2, 3]); // ["replacement", 1, 2, 3]
 * replaceItemSecond([0, 1, 2, 3]); // [0, "replacement", 2, 3]
 * ```
 *
 * @template Item Type of the item to be inserted.
 * @param item Replacing item.
 * @returns Curried function with `item` in context.
 */
export const replace = <Item>(item: Item) =>
	/**
	 * @param index Index to start replace item.
	 * @returns Curried function with `item` and `index` in context.
	 */
	(index: number) =>
		/**
		 * @template SourceItem Type of items in source Array.
		 * @param source Source array to apply replace on.
		 * @returns Copy of array with added item in it.
		 */
		<SourceItem = Item>(source: readonly SourceItem[]) =>
			index <= 0
				? [item, ...slice(1)(Infinity)(source)]
				: index >= source.length
				? [...slice(0)(-1)(source), item]
				: [
						...slice(0)(index)(source),
						item,
						...slice(index + 1)(source.length)(source)
				  ];

export default replace;

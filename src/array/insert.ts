import { slice } from "./slice";

/**
 * Takes an `item` and an `index` and makes a copy of given `source` array with
 * that new `item` in the given `index`.
 *
 * @example
 * ```typescript
 * const insertItem = insert("new");
 * const insertItemLast = insertItem(Infinity);
 * const insertItemFirst = insertItem(0);
 * const insertItemSecond = insertItem(1);
 *
 * insertItemLast([0, 1, 2, 3]); // [0, 1, 2, 3, "new"]
 * insertItemFirst([0, 1, 2, 3]); // ["new", 0, 1, 2, 3]
 * insertItemSecond([0, 1, 2, 3]); // [0, "new", 1, 2, 3]
 * ```
 * @template Item Type of items to insert in source array.
 * @param item Item to be inserted.
 * @returns Curried function with `item` in context.
 */
export const insert = <Item>(item: Item) =>
	/**
	 * @param index Index to insert item.
	 * @returns Curried function with `item` and `index` in context.
	 */
	(index: number) =>
		/**
		 * @template SourceItem Type of items in source Array.
		 * @param source Source array to insert item in.
		 * @returns Copy of array with added item in it.
		 */
		<SourceItem = Item>(source: readonly SourceItem[]) =>
			index <= 0
				? [item, ...source]
				: index >= source.length
				? [...source, item]
				: [
						...slice(0)(index)(source),
						item,
						...slice(index)(source.length)(source)
				  ];

export default insert;

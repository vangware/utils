import { arraySliceFrom } from "./arraySliceFrom";
import { arraySliceTo } from "./arraySliceTo";

/**
 * Takes an `index` and an `item` and makes a copy of given `source` array with
 * that new `item` in the given `index`.
 *
 * @example
 * ```typescript
 * const insertLast = arrayInsert(Infinity);
 * const insertFirst = arrayInsert(0);
 * const insertValueLast = insertLast("value");
 * const insertValueFirst = insertFirst("value");
 *
 * insertValueLast([0, 1, 2, 3]); // [0, 1, 2, 3, "value"]
 * insertValueFirst([0, 1, 2, 3]); // ["value", 0, 1, 2, 3]
 * ```
 * @param index Index to insert item.
 * @returns Curried function with `item` in context.
 */
export const arrayInsert =
	(index: number) =>
	/**
	 * @template Item Type of items to insert in source array.
	 * @param item Item to be inserted.
	 * @returns Curried function with `index` and `item` in context.
	 */
	<Item>(item: Item) =>
	/**
	 * @template SourceItem Type of items in source Array.
	 * @param source Source array to insert item in.
	 * @returns Copy of array with added item in it.
	 */
	<SourceItem = Item>(source: ReadonlyArray<SourceItem>) =>
		index <= 0
			? [item, ...source]
			: index >= source.length
			? [...source, item]
			: [
					...arraySliceTo(index)(source),
					item,
					...arraySliceFrom(index)(source)
			  ];

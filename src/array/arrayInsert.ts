import { ReadOnlyObject } from "../types/ReadOnlyObject";
import { ReadOnlyObjectArray } from "../types/ReadOnlyObjectArray";
import { arraySliceFrom } from "./arraySliceFrom";
import { arraySliceTo } from "./arraySliceTo";

/**
 * Takes an `item` and an `index` and makes a copy of given `source` array with
 * that new `item` in the given `index`.
 *
 * @example
 * ```typescript
 * const insertValue = arrayInsert("value");
 * const insertValueLast = insertValue(Infinity);
 * const insertValueFirst = insertValue(0);
 * const insertValueSecond = insertValue(1);
 *
 * insertValueLast([0, 1, 2, 3]); // [0, 1, 2, 3, "value"]
 * insertValueFirst([0, 1, 2, 3]); // ["value", 0, 1, 2, 3]
 * insertValueSecond([0, 1, 2, 3]); // [0, "value", 1, 2, 3]
 * ```
 * @template Item Type of items to insert in source array.
 * @param item Item to be inserted.
 * @returns Curried function with `item` in context.
 */
export const arrayInsert = <Item>(item: ReadOnlyObject<Item>) =>
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
		<SourceItem = Item>(source: ReadOnlyObjectArray<SourceItem>) =>
			index <= 0
				? [item, ...source]
				: index >= source.length
				? [...source, item]
				: [
						...arraySliceTo(index)(source),
						item,
						...arraySliceFrom(index)(source)
				  ];

export default arrayInsert;

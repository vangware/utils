import { ReadOnlyObject } from "../types/ReadOnlyObject";
import { ReadOnlyObjectArray } from "../types/ReadOnlyObjectArray";
import { arraySliceFrom } from "./arraySliceFrom";
import { arraySliceTo } from "./arraySliceTo";

/**
 * Takes an `item` and an `index` and replaces the `source` array item in that
 * `index` with the taken `item`.
 *
 * @example
 * ```typescript
 * const replaceWithReplacement = arrayReplace("replacement");
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
export const arrayReplace = <Item>(item: ReadOnlyObject<Item>) =>
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
		<SourceItem = Item>(source: ReadOnlyObjectArray<SourceItem>) =>
			index <= 0
				? [item, ...arraySliceFrom(1)(source)]
				: index >= source.length
				? [...arraySliceTo(-1)(source), item]
				: [
						...arraySliceTo(index)(source),
						item,
						...arraySliceFrom(index + 1)(source)
				  ];

export default arrayReplace;

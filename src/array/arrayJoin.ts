import { ReadOnlyObjectArray } from "../types/ReadOnlyObjectArray";

/**
 * Curried wrapper for `Array.prototype.join`.
 *
 * @example
 * ```typescript
 * const joinWithSpaces = arrayJoin(" ");
 * joinWithSpaces(["foo", "bar"]); // "foo bar"
 * ```
 * @param separator Value separator.
 * @returns Curried function with `separator` in context.
 */
export const arrayJoin = (separator: string) =>
	/**
	 * @param source Source array to be joined with `separator`.
	 */
	<Item>(source: ReadOnlyObjectArray<Item>) => source.join(separator);

export default arrayJoin;

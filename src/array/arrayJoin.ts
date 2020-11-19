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
	<Item>(source: readonly Item[]) => source.join(separator);

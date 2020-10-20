/**
 * Takes a regular expression and a string and returns a `RegExpMatchArray`.
 *
 * @example
 * ```typescript
 * const matchesNumbers = stringTest(/\d/gu);
 * onlyHasNumbers("1234"); // ["1", "2", "3", "4"]
 * onlyHasNumbers("nope"); // []
 * ```
 * @param regularExpression Regular expression to match with.
 * @returns Curried function with `regularExpression` in context.
 */
export const stringMatches = ({ source: regExp, flags }: RegExp) =>
	/**
	 * @param source Source string to match.
	 * @returns `RegExpMatchArray` (empty if no matches are found).
	 */
	(source: string) => source.match(new RegExp(regExp, flags)) || [];

export default stringMatches;

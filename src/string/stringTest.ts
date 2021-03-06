/**
 * Takes a regular expression and a string and returns true if it matches.
 *
 * @example
 * ```typescript
 * const onlyHasNumbers = stringTest(/^\d+$/gu);
 * onlyHasNumbers("1234"); // true
 * onlyHasNumbers("nope"); // false
 * ```
 * @param regularExpression Regular expression to test with.
 * @returns Curried function with `regularExpression` in context.
 */
export const stringTest =
	({ source: regExp, flags }: Readonly<RegExp>) =>
	/**
	 * @param source Source string to test.
	 * @returns Boolean with the test result.
	 */
	(source: string) =>
		new RegExp(regExp, flags).test(source);

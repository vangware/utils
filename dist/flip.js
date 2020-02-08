/**
 * Flips arguments of a curried function.
 *
 * @category Functions
 * @example
 * ```typescript
 * const concat = (first: string) => (second: string) => `${first}${second}`;
 * const flippedConcat = flip(concat);
 *
 * flippedConcat("1")("2"); // "21"
 * ```
 * @returns Curried function with `unary` in context.
 */
export const flip =
	unary =>
	(...secondArgument) =>
	(...firstArgument) =>
		unary(...firstArgument)(...secondArgument);

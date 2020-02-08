/**
 * Conditional handler for  when something is an `Iterable`.
 *
 * @category Conditions
 */
export declare const whenIsIterable: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<
		{
			readonly [Symbol.iterator]: () => Iterator<unknown, any, undefined>;
		},
		TrueOutput
	>,
) => <
	FalseInput = {
		readonly [Symbol.iterator]: () => Iterator<unknown, any, undefined>;
	},
	FalseOutput = TrueOutput,
>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

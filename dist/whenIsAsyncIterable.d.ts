/**
 * Conditional handler for  when something is an `AsyncIterable`.
 *
 * @category Conditions
 */
export declare const whenIsAsyncIterable: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<
		{
			readonly [Symbol.asyncIterator]: () => AsyncIterator<
				unknown,
				any,
				undefined
			>;
		},
		TrueOutput
	>,
) => <
	FalseInput = {
		readonly [Symbol.asyncIterator]: () => AsyncIterator<
			unknown,
			any,
			undefined
		>;
	},
	FalseOutput = TrueOutput,
>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

/**
 * Conditional handler for  when something is a `Function`.
 *
 * @category Conditions
 */
export declare const whenIsFunction: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<
		import("@vangware/types").Function<
			import("@vangware/types").ReadOnlyArray,
			unknown
		>,
		TrueOutput
	>,
) => <
	FalseInput = import("@vangware/types").Function<
		import("@vangware/types").ReadOnlyArray,
		unknown
	>,
	FalseOutput = TrueOutput,
>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

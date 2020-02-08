/**
 * Conditional handler for when something is an `Array`.
 *
 * @category Conditions
 */
export declare const whenIsArray: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<
		import("@vangware/types").ReadOnlyArray<unknown>,
		TrueOutput
	>,
) => <
	FalseInput = import("@vangware/types").ReadOnlyArray<unknown>,
	FalseOutput = TrueOutput,
>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

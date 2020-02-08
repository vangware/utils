/**
 * Conditional handler for  when something is a `Nullish` value.
 *
 * @category Conditions
 */
export declare const whenIsNullish: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<
		import("@vangware/types").Nullish,
		TrueOutput
	>,
) => <FalseInput = import("@vangware/types").Nullish, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

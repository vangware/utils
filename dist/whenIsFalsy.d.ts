/**
 * Conditional handler for  when something is a `Falsy` value.
 *
 * @category Conditions
 */
export declare const whenIsFalsy: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<
		import("@vangware/types").Falsy,
		TrueOutput
	>,
) => <FalseInput = import("@vangware/types").Falsy, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

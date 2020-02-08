/**
 * Conditional handler for  when something is a `String`.
 *
 * @category Conditions
 */
export declare const whenIsString: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<string, TrueOutput>,
) => <FalseInput = string, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

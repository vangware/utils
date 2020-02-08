/**
 * Conditional handler for  when something is a `Number`.
 *
 * @category Conditions
 */
export declare const whenIsNumber: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<number, TrueOutput>,
) => <FalseInput = number, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

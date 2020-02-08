/**
 * Conditional handler for  when something is `null`.
 *
 * @category Conditions
 */
export declare const whenIsNull: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<null, TrueOutput>,
) => <FalseInput = null, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

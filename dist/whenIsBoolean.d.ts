/**
 * Conditional handler for when something is a `Boolean`.
 *
 * @category Conditions
 */
export declare const whenIsBoolean: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<boolean, TrueOutput>,
) => <FalseInput = boolean, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

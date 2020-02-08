/**
 * Conditional handler for  when something is `undefined`.
 *
 * @category Conditions
 */
export declare const whenIsUndefined: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<undefined, TrueOutput>,
) => <FalseInput = undefined, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

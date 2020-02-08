/**
 * Conditional handler for  when something is a `RegExp`.
 *
 * @category Conditions
 */
export declare const whenIsRegExp: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<RegExp, TrueOutput>,
) => <FalseInput = RegExp, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

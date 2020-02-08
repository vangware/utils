/**
 * Conditional handler for  when something is a `Symbol`.
 *
 * @category Conditions
 */
export declare const whenIsSymbol: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<symbol, TrueOutput>,
) => <FalseInput = symbol, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

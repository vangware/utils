/**
 * Conditional handler for  when something is a `PropertyKey`.
 *
 * @category Conditions
 */
export declare const whenIsPropertyKey: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<PropertyKey, TrueOutput>,
) => <FalseInput = PropertyKey, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

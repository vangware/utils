/**
 * Conditional handler for  when something is an `Object`.
 *
 * @category Conditions
 */
export declare const whenIsObject: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<object, TrueOutput>,
) => <FalseInput = object, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

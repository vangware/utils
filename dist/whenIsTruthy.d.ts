/**
 * Conditional handler for  when something is a `Truthy` value.
 *
 * @category Conditions
 */
export declare const whenIsTruthy: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<unknown, TrueOutput>,
) => <FalseInput = unknown, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

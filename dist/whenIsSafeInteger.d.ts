/**
 * Conditional handler for  when a number is a `SafeInteger`.
 *
 * @category Conditions
 */
export declare const whenIsSafeInteger: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<number, TrueOutput>,
) => <FalseInput = number, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: number) => TrueOutput | FalseOutput;

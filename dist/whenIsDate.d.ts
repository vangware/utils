/**
 * Conditional handler for  when something is a `Date`.
 *
 * @category Conditions
 */
export declare const whenIsDate: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<Date, TrueOutput>,
) => <FalseInput = Date, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

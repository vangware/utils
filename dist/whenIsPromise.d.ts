/**
 * Conditional handler for  when something is a `Promise`.
 *
 * @category Conditions
 */
export declare const whenIsPromise: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<
		Promise<unknown>,
		TrueOutput
	>,
) => <FalseInput = Promise<unknown>, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

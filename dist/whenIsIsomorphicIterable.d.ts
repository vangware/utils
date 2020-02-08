/**
 * Conditional handler for when something is an `AsynchronousIterable`.
 *
 * @category Conditions
 */
export declare const whenIsIsomorphicIterable: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<
		import("@vangware/types").IsomorphicIterable<unknown>,
		TrueOutput
	>,
) => <
	FalseInput = import("@vangware/types").IsomorphicIterable<unknown>,
	FalseOutput = TrueOutput,
>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

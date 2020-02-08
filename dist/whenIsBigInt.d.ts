/**
 * Conditional handler for  when something is a `BigInt`.
 *
 * @category Conditions
 */
export declare const whenIsBigInt: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<bigint, TrueOutput>,
) => <FalseInput = bigint, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: unknown) => TrueOutput | FalseOutput;

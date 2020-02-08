/**
 * Conditional handler for when something has an `Object` prototype.
 *
 * @category Conditions
 */
export declare const whenIsPrototypeOfObject: <TrueOutput>(
	truthyHandler: import("@vangware/types").Unary<object, TrueOutput>,
) => <FalseInput = object, FalseOutput = TrueOutput>(
	falsyHandler: import("@vangware/types").Unary<FalseInput, FalseOutput>,
) => (value: object) => TrueOutput | FalseOutput;

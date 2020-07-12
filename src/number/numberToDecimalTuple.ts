import { DecimalTuple } from "../types/DecimalTuple";

/**
 * Takes a `source` number and returns a DecimalTuple [coefficient, exponent].
 *
 * @example
 * ```typescript
 * numberToDecimalTuple(Math.PI); // [3141592653589793, -15]
 * numberToDecimalTuple(5000); // [5, 3]
 * ```
 * @param source Source number to be parsed into a DecimalTuple.
 * @returns DecimalTuple [coefficient, exponent].
 */
export const numberToDecimalTuple = (source: number) => {
	const stringSource = `${source}`;
	// TODO: Maybe move this to it's own file?
	const parseDecimalPoint = (wholeDecimalSource: string) => {
		const [whole, decimal = ""] = wholeDecimalSource.split(".");
		const wholeWithoutTrailingZeros = decimal.length
			? whole
			: whole.replace(/(?<zeros>0+)$/u, "");

		return [
			parseInt(`${wholeWithoutTrailingZeros}${decimal}`, 10),
			decimal.length
				? -decimal.length
				: whole.length - wholeWithoutTrailingZeros.length
		] as DecimalTuple;
	};
	// TODO: Maybe move this to it's own file?
	const parseExponential = (sourceWithExponential: string) => {
		const [sourceCoefficient, sourceExponent] = sourceWithExponential.split(
			"e"
		);
		const [coefficient, exponent] = parseDecimalPoint(sourceCoefficient);

		return [
			coefficient,
			parseInt(sourceExponent, 10) + exponent
		] as DecimalTuple;
	};

	return stringSource.includes("e")
		? parseExponential(stringSource)
		: parseDecimalPoint(stringSource);
};

export default numberToDecimalTuple;

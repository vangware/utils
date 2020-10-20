import { suite } from "@vangware/test";
import { numberWithExponentToDecimalTuple } from "../../src/number/numberWithExponentToDecimalTuple";

export default suite([
	{
		given: "a large number with exponent",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberWithExponentToDecimalTuple(1.5e21),
		wanted: [15, 20]
	},
	{
		given: "a small number with exponent",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberWithExponentToDecimalTuple(2.1e-10),
		wanted: [21, -11]
	}
]);

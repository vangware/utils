import { test } from "@vangware/test";
import { numberFloatToDecimalTuple } from "../../src/number/numberFloatToDecimalTuple";

export default test([
	{
		given: "PI",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberFloatToDecimalTuple(3.14),
		wanted: [314, -2]
	},
	{
		given: "a number with no trailing zeros",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberFloatToDecimalTuple(1337),
		wanted: [1337, 0]
	},
	{
		given: "a number with trailing zeros",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberFloatToDecimalTuple(7000),
		wanted: [7, 3]
	},
	{
		given: "0",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberFloatToDecimalTuple(0),
		wanted: [0, 0]
	}
]);

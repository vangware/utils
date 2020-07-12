import { numberToDecimalTuple } from "../../src/number/numberToDecimalTuple";
import { test } from "../test";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "PI",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberToDecimalTuple(3.14),
		wanted: [314, -2]
	},
	{
		given: "a number with no trailing zeros",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberToDecimalTuple(1337),
		wanted: [1337, 0]
	},
	{
		given: "a number with trailing zeros",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberToDecimalTuple(7000),
		wanted: [7, 3]
	}
]);

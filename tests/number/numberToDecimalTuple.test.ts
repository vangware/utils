import { suite } from "@vangware/test";
import { numberToDecimalTuple } from "../../src/number/numberToDecimalTuple.js";

export default suite([
	{
		given: "PI",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberToDecimalTuple(3.14),
		wanted: [314, -2],
	},
	{
		given: "a number with no trailing zeros",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberToDecimalTuple(1337),
		wanted: [1337, 0],
	},
	{
		given: "a number with trailing zeros",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberToDecimalTuple(7000),
		wanted: [7, 3],
	},
	{
		given: "a large number with exponent",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberToDecimalTuple(1.5e21),
		wanted: [15, 20],
	},
	{
		given: "a small number with exponent",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberToDecimalTuple(2.1e-10),
		wanted: [21, -11],
	},
	{
		given: "0",
		must: "get a tuple with the correct coefficient and exponent",
		received: numberToDecimalTuple(0),
		wanted: [0, 0],
	},
]);

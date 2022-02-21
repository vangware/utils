import type { Tests } from "@vangware/test";
import { numberToString } from "../../src/number/numberToString.js";

export default [
	{
		given: "a number with value 16 and a radix of 16",
		must: "return the string '10'",
		received: numberToString(16)(16),
		wanted: "10",
	},
	{
		given: "a number with value 10 and a radix of 10",
		must: "return the string '10'",
		received: numberToString(10)(10),
		wanted: "10",
	},
	{
		given: "a number with value 2 and a radix of 2",
		must: "return the string '10'",
		received: numberToString(2)(2),
		wanted: "10",
	},
] as Tests<`${number}`>;

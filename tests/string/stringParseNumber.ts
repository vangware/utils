import { test } from "@vangware/test";
import { stringParseNumber } from "../../src/string/stringParseNumber";

export default test([
	{
		given: "a string with value '10' and a radix of 16",
		must: "return the number 16 (0x10)",
		received: stringParseNumber(16)("10"),
		wanted: 0x10
	},
	{
		given: "a string with value '10' and a radix of 10",
		must: "return the number 10",
		received: stringParseNumber(10)("10"),
		wanted: 10
	},
	{
		given: "a string with value '10' and a radix of 2",
		must: "return the number 2",
		received: stringParseNumber(2)("10"),
		wanted: 2
	}
]);

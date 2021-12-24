import { suite } from "@vangware/test";
import { stringParseDecimal } from "../../src/string/stringParseDecimal.js";

export default suite([
	{
		given: "a string with value '10'",
		must: "return the number 10",
		received: stringParseDecimal("10"),
		wanted: 10,
	},
	{
		given: "a string with value '0x10'",
		must: "return the number 0",
		received: stringParseDecimal("0x10"),
		wanted: 0,
	},
]);

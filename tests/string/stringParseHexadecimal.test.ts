import { suite } from "@vangware/test";
import { stringParseHexadecimal } from "../../src/string/stringParseHexadecimal.js";

export default suite([
	{
		given: "a string with value '10'",
		must: "return the number 16 (0x10)",
		received: stringParseHexadecimal("10"),
		wanted: 0x10,
	},
	{
		given: "a string with value '0x10'",
		must: "return the number 16 (0x10)",
		received: stringParseHexadecimal("0x10"),
		wanted: 0x10,
	},
]);

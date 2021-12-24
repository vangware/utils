import { suite } from "@vangware/test";
import { numberToStringHexadecimal } from "../../src/number/numberToStringHexadecimal.js";

export default suite([
	{
		given: "a number with value 16",
		must: "return the string '10'",
		received: numberToStringHexadecimal(16),
		wanted: "10",
	},
	{
		given: "a number with value 16",
		must: "return the string '10'",
		received: numberToStringHexadecimal(0x10),
		wanted: "10",
	},
]);

import type { Tests } from "@vangware/test";
import { numberToStringDecimal } from "../../src/number/numberToStringDecimal.js";

export default [
	{
		given: "a number with value 10",
		must: "return the string '10'",
		received: numberToStringDecimal(10),
		wanted: "10",
	},
	{
		given: "a number with value 0x10",
		must: "return the string '16'",
		received: numberToStringDecimal(0x10),
		wanted: "16",
	},
] as Tests<`${number}`>;

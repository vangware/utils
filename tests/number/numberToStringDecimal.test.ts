import { suite } from "@vangware/test";
import { numberToStringDecimal } from "../../src/number/numberToStringDecimal";

export default suite([
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
]);

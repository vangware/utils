import { suite } from "@vangware/test";
import { numberDivide } from "../../src/number/numberDivide";

export default suite([
	{
		given: "5 and 2",
		must: "get 2.5",
		received: numberDivide(2)(5),
		wanted: 2.5
	},
	{
		given: "5 and 2.5",
		must: "get 2",
		received: numberDivide(2.5)(5),
		wanted: 2
	},
	{
		given: "1000 and 16",
		must: "get 62.5",
		received: numberDivide(16)(1000),
		wanted: 62.5
	}
]);

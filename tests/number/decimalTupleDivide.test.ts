import { suite } from "@vangware/test";
import { decimalTupleDivide } from "../../src/number/decimalTupleDivide";

export default suite([
	{
		given: "a DecimalTuple representing 5 and 2",
		must: "get a DecimalTuple representing 2.5",
		received: decimalTupleDivide([2, 0])([5, 0]),
		wanted: [25, -1]
	},
	{
		given: "a DecimalTuple representing 5 and 2.5",
		must: "get a DecimalTuple representing 2",
		received: decimalTupleDivide([25, -1])([5, 0]),
		wanted: [2, 0]
	},
	{
		given: "a DecimalTuple representing 1000 and 16",
		must: "get a DecimalTuple representing 62.5",
		received: decimalTupleDivide([16, 0])([1, 3]),
		wanted: [625, -1]
	}
]);

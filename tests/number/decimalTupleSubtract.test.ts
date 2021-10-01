import { suite } from "@vangware/test";
import { decimalTupleSubtract } from "../../src/number/decimalTupleSubtract";

export default suite([
	{
		given: "a DecimalTuple representing 1 and 0.1",
		must: "get a DecimalTuple representing 0.9",
		received: decimalTupleSubtract([1, -1])([1, 0]),
		wanted: [9, -1],
	},
	{
		given: "a DecimalTuple representing 1 and 0.5",
		must: "get a DecimalTuple representing 0.5",
		received: decimalTupleSubtract([5, -1])([1, 0]),
		wanted: [5, -1],
	},
	{
		given: "a DecimalTuple representing 100000 and 1000",
		must: "get a DecimalTuple representing 99000",
		received: decimalTupleSubtract([1, 3])([1, 5]),
		wanted: [99, 3],
	},
	{
		given: "a DecimalTuple representing 1 and 0",
		must: "get a DecimalTuple representing 1",
		received: decimalTupleSubtract([0, 0])([1, 0]),
		wanted: [1, 0],
	},
]);

import { suite } from "@vangware/test";
import { decimalTupleAdd } from "../../src/number/decimalTupleAdd";

export default suite([
	{
		given: "a DecimalTuple representing 0.1 and 0.2",
		must: "get a DecimalTuple representing 0.3",
		received: decimalTupleAdd([1, -1])([2, -1]),
		wanted: [3, -1]
	},
	{
		given: "a DecimalTuple representing 1 and 0.5",
		must: "get a DecimalTuple representing 1.5",
		received: decimalTupleAdd([1, 0])([5, -1]),
		wanted: [15, -1]
	},
	{
		given: "a DecimalTuple representing 1000 and 100000",
		must: "get a DecimalTuple representing 101000",
		received: decimalTupleAdd([1, 3])([1, 5]),
		wanted: [101, 3]
	}
]);

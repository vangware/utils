import { test } from "@vangware/test";
import { decimalTupleMultiply } from "../../src/number/decimalTupleMultiply";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "a DecimalTuple representing 2 and 0.5",
		must: "get a DecimalTuple representing 1",
		received: decimalTupleMultiply([2, 0])([5, -1]),
		wanted: [1, 0]
	},
	{
		given: "a DecimalTuple representing 0.2 and 0.3",
		must: "get a DecimalTuple representing 0.06",
		received: decimalTupleMultiply([2, -1])([3, -1]),
		wanted: [6, -2]
	},
	{
		given: "a DecimalTuple representing 10 and 3.5",
		must: "get a DecimalTuple representing 35",
		received: decimalTupleMultiply([1, 1])([35, -1]),
		wanted: [35, 0]
	}
]);

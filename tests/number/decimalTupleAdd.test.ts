import type { Tests } from "@vangware/test";
import type { DecimalTuple } from "../../src/index.js";
import { decimalTupleAdd } from "../../src/number/decimalTupleAdd.js";

export default [
	{
		given: "a DecimalTuple representing 0.1 and 0.2",
		must: "get a DecimalTuple representing 0.3",
		received: decimalTupleAdd([1, -1])([2, -1]),
		wanted: [3, -1],
	},
	{
		given: "a DecimalTuple representing 1 and 0.5",
		must: "get a DecimalTuple representing 1.5",
		received: decimalTupleAdd([1, 0])([5, -1]),
		wanted: [15, -1],
	},
	{
		given: "a DecimalTuple representing 1000 and 100000",
		must: "get a DecimalTuple representing 101000",
		received: decimalTupleAdd([1, 3])([1, 5]),
		wanted: [101, 3],
	},
] as Tests<DecimalTuple>;

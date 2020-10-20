import { suite } from "@vangware/test";
import { decimalTupleToNumber } from "../../src/number/decimalTupleToNumber";

export default suite([
	{
		given: "a DecimalTuple representing PI",
		must: "get PI",
		received: decimalTupleToNumber([314, -2]),
		wanted: 3.14
	},
	{
		given: "a DecimalTuple with no exponent",
		must: "get the coefficient number",
		received: decimalTupleToNumber([1337, 0]),
		wanted: 1337
	},
	{
		given: "a DecimalTuple",
		must: "get the resulting number of that coefficient and that exponent",
		received: decimalTupleToNumber([7, 3]),
		wanted: 7000
	}
]);

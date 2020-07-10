import { arrayReduce } from "../../src/array/arrayReduce";
import { test } from "../test";

const array = [0, 1, 2, 3];

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "an array of numbers and a sum reducer",
		must: "return the total sum",
		received: arrayReduce((output: number) => (value: number) =>
			output + value
		)(0)(array),
		wanted: 6
	}
]);

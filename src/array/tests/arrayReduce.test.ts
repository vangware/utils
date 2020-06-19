import { assert } from "../../assert";
import { arrayReduce } from "../arrayReduce";

const array = [0, 1, 2, 3];

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "an array of numbers and a sum reducer",
		must: "return the total sum",
		received: arrayReduce<number, number>(output => value =>
			output + value
		)(0)(array),
		wanted: 6
	}
]);

import { arrayReduce } from "../arrayReduce";
import { assert } from "./assert";

const array = [0, 1, 2, 3];

export const arrayReduceAssertions = assert([
	{
		given: "an array of numbers and a sum reducer",
		must: "return the total sum",
		received: arrayReduce<number, number>(output => value =>
			output + value
		)(0)(array),
		wanted: 6
	}
]);

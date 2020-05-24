import { assert } from "../../assert";
import { filterOut } from "../filterOut";

const array = [0, 1, 2, 3];

export const filterOutAssertions = assert([
	{
		given: "an array of numbers and an always false filter",
		must: "return all elements",
		received: filterOut(_ => false)(array),
		wanted: array
	},
	{
		given: "an array of numbers and an even number filter",
		must: "return only odd numbers",
		received: filterOut<number>(item => item % 2 === 0)(array),
		wanted: [1, 3]
	}
]);

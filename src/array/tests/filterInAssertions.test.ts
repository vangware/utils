import { assert } from "../../assert";
import { filterIn } from "../filterIn";

const array = [0, 1, 2, 3];

export const filterInAssertions = assert([
	{
		given: "an array of numbers and an always false filter",
		must: "return an empty array",
		received: filterIn(_ => false)(array),
		wanted: []
	},
	{
		given: "an array of numbers and an even number filter",
		must: "return only even numbers",
		received: filterIn<number>(item => item % 2 === 0)(array),
		wanted: [0, 2]
	}
]);

import { arrayFilterTuple } from "../../src/array/arrayFilterTuple";
import { Tuple } from "../../src/types/Tuple";
import { test } from "../test";

const array = [0, 1, 2, 3];

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "an array of numbers and a filter for the number 1",
		must: "return [1, nonMatching]",
		received: arrayFilterTuple((value: number) => value === 1)(array),
		wanted: [[1], [0, 2, 3]] as Tuple<readonly number[]>
	},
	{
		given: "an array of numbers and a filter for even numbers",
		must: "return [evens, odds]",
		received: arrayFilterTuple((value: number) => value % 2 === 0)(array),
		wanted: [
			[0, 2],
			[1, 3]
		] as Tuple<readonly number[]>
	}
]);

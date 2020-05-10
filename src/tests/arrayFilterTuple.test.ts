import { arrayFilterTuple } from "../arrayFilterTuple";
import type { Tuple } from "../types/Tuple";
import { assert } from "./assert";

const array = [0, 1, 2, 3];

export const arrayFilterTupleAssertions = assert([
	{
		given: "an array of numbers and a filter for the number 1",
		must: "return [1, nonMatching]",
		received: arrayFilterTuple<number>(value => value === 1)(array),
		wanted: [[1], [0, 2, 3]] as Tuple<readonly number[]>
	},
	{
		given: "an array of numbers and a filter for even numbers",
		must: "return [evens, odds]",
		received: arrayFilterTuple<number>(value => value % 2 === 0)(array),
		wanted: [
			[0, 2],
			[1, 3]
		] as Tuple<readonly number[]>
	}
]);

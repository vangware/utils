import { test } from "@vangware/test";
import { arrayFilterTuple } from "../../src/array/arrayFilterTuple";
import { Tuple } from "../../src/types/Tuple";

const array = [0, 1, 2, 3];

export default test([
	{
		given: "an array of numbers and a filter for the number 1",
		must: "return [1, nonMatching]",
		received: arrayFilterTuple(
			(item: number): item is number => item === 1
		)(array),
		wanted: [[1], [0, 2, 3]] as Tuple<readonly number[]>
	},
	{
		given: "an array of numbers and a filter for even numbers",
		must: "return [evens, odds]",
		received: arrayFilterTuple(
			(item: number): item is number => item % 2 === 0
		)(array),
		wanted: [
			[0, 2],
			[1, 3]
		] as Tuple<readonly number[]>
	}
]);

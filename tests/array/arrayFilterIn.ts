import { test } from "@vangware/test";
import { arrayFilterIn } from "../../src/array/arrayFilterIn";

const array = [0, 1, 2, 3];

export default test([
	{
		given: "an array of numbers and an always false filter",
		must: "return an empty array",
		received: arrayFilterIn((_): _ is never => false)(array),
		wanted: []
	},
	{
		given: "an array of numbers and an even number filter",
		must: "return only even numbers",
		received: arrayFilterIn(
			(item: number): item is number => item % 2 === 0
		)(array),
		wanted: [0, 2]
	}
]);

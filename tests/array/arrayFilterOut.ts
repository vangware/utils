import { test } from "@vangware/test";
import { arrayFilterOut } from "../../src/array/arrayFilterOut";

const array = [0, 1, 2, 3];

export default test([
	{
		given: "an array of numbers and an always false filter",
		must: "return all elements",
		received: arrayFilterOut((_: number): _ is never => false)(array),
		wanted: array
	},
	{
		given: "an array of numbers and an even number filter",
		must: "return only odd numbers",
		received: arrayFilterOut(
			(item: number): item is number => item % 2 === 0
		)(array),
		wanted: [1, 3]
	}
]);

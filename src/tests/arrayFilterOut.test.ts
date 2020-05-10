import { arrayFilterOut } from "../arrayFilterOut";
import { assert } from "./assert";

const array = [0, 1, 2, 3];

export const arrayFilterOutAssertions = assert([
	{
		given: "an array of numbers and an always false filter",
		must: "return all elements",
		received: arrayFilterOut(_ => false)(array),
		wanted: array
	},
	{
		given: "an array of numbers and an even number filter",
		must: "return only odd numbers",
		received: arrayFilterOut<number>(item => item % 2 === 0)(array),
		wanted: [1, 3]
	}
]);

import { assert } from "../../assert";
import { arrayFilterOut } from "../arrayFilterOut";

const array = [0, 1, 2, 3];

// eslint-disable-next-line functional/no-expression-statement
assert([
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

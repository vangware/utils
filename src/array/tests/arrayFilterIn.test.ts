import { assert } from "../../assert";
import { arrayFilterIn } from "../arrayFilterIn";

const array = [0, 1, 2, 3];

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "an array of numbers and an always false filter",
		must: "return an empty array",
		received: arrayFilterIn(_ => false)(array),
		wanted: []
	},
	{
		given: "an array of numbers and an even number filter",
		must: "return only even numbers",
		received: arrayFilterIn<number>(item => item % 2 === 0)(array),
		wanted: [0, 2]
	}
]);

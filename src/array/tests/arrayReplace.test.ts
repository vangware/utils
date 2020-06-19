import { assert } from "../../assert";
import { arrayReplace } from "../arrayReplace";

const array = [0, 1, 2, 3];
const string = "string";

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "an array of numbers, a string and a valid index",
		must: "replace correct index in the array",
		received: arrayReplace(string)(2)(array),
		wanted: [0, 1, string, 3]
	},
	{
		given: "an array of numbers, a string and an invalid index (bigger)",
		must: "replace last in the array",
		received: arrayReplace(string)(Infinity)(array),
		wanted: [0, 1, 2, string]
	},
	{
		given: "an array of numbers, a string and an invalid index (lower)",
		must: "replace first in the array",
		received: arrayReplace(string)(-1)(array),
		wanted: [string, 1, 2, 3]
	}
]);

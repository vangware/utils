import { assert } from "../../assert";
import { replace } from "../replace";

const array = [0, 1, 2, 3];
const string = "string";

export const replaceAssertions = assert([
	{
		given: "an array of numbers, a string and a valid index",
		must: "replace correct index in the array",
		received: replace(string)(2)(array),
		wanted: [0, 1, string, 3]
	},
	{
		given: "an array of numbers, a string and an invalid index (bigger)",
		must: "replace last in the array",
		received: replace(string)(Infinity)(array),
		wanted: [0, 1, 2, string]
	},
	{
		given: "an array of numbers, a string and an invalid index (lower)",
		must: "replace first in the array",
		received: replace(string)(-1)(array),
		wanted: [string, 1, 2, 3]
	}
]);

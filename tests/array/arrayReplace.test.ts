import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arrayReplace } from "../../src/array/arrayReplace.js";

const array = [0, 1, 2, 3];
const string = "string";

export default [
	{
		given: "an array of numbers, a string and a valid index",
		must: "replace correct index in the array",
		received: arrayReplace(2)(string)(array),
		wanted: [0, 1, string, 3],
	},
	{
		given: "an array of numbers, a string and an invalid index (bigger)",
		must: "replace last in the array",
		received: arrayReplace(Infinity)(string)(array),
		wanted: [0, 1, 2, string],
	},
	{
		given: "an array of numbers, a string and an invalid index (lower)",
		must: "replace first in the array",
		received: arrayReplace(-1)(string)(array),
		wanted: [string, 1, 2, 3],
	},
] as Tests<ReadOnlyArray<number | string>>;

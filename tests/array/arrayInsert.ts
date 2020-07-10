import { arrayInsert } from "../../src/array/arrayInsert";
import { test } from "../test";

const array = [0, 1, 2, 3];
const string = "string";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "an array of numbers, a string and a valid index",
		must: "add it to the array of numbers",
		received: arrayInsert(string)(2)(array),
		wanted: [0, 1, string, 2, 3]
	},
	{
		given: "an array of numbers, a string and an invalid index (bigger)",
		must: "insert at the end of the array",
		received: arrayInsert(string)(Infinity)(array),
		wanted: [0, 1, 2, 3, string]
	},
	{
		given: "an array of numbers, a string and an invalid index (lower)",
		must: "insert at the beginning of the array",
		received: arrayInsert(string)(-1)(array),
		wanted: [string, 0, 1, 2, 3]
	}
]);

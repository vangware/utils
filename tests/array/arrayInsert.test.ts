import { suite } from "@vangware/test";
import { arrayInsert } from "../../src/array/arrayInsert.js";

const array = [0, 1, 2, 3];
const string = "string";

export default suite([
	{
		given: "an array of numbers, a string and a valid index",
		must: "add it to the array of numbers",
		received: arrayInsert(2)(string)(array),
		wanted: [0, 1, string, 2, 3],
	},
	{
		given: "an array of numbers, a string and an invalid index (bigger)",
		must: "insert at the end of the array",
		received: arrayInsert(Infinity)(string)(array),
		wanted: [0, 1, 2, 3, string],
	},
	{
		given: "an array of numbers, a string and an invalid index (lower)",
		must: "insert at the beginning of the array",
		received: arrayInsert(-1)(string)(array),
		wanted: [string, 0, 1, 2, 3],
	},
]);

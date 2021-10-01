import { suite } from "@vangware/test";
import { arrayInsertFirst } from "../../src/array/arrayInsertFirst";

const array = [0, 1, 2, 3];
const string = "string";

export default suite([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the beginning",
		received: arrayInsertFirst(string)(array),
		wanted: [string, ...array],
	},
]);

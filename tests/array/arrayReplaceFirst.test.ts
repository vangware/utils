import { suite } from "@vangware/test";
import { arrayReplaceFirst } from "../../src/array/arrayReplaceFirst.js";

const array = [0, 1, 2, 3];
const string = "string";

export default suite([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the beginning",
		received: arrayReplaceFirst(string)(array),
		wanted: [string, 1, 2, 3],
	},
]);

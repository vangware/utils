import { suite } from "@vangware/test";
import { arrayReplaceLast } from "../../src/array/arrayReplaceLast.js";

const array = [0, 1, 2, 3];
const string = "string";

export default suite([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the end",
		received: arrayReplaceLast(string)(array),
		wanted: [0, 1, 2, string],
	},
]);

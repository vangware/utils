import { test } from "@vangware/test";
import { arrayReplaceFirst } from "../../src/array/arrayReplaceFirst";

const array = [0, 1, 2, 3];
const string = "string";

export default test([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the beginning",
		received: arrayReplaceFirst(string)(array),
		wanted: [string, 1, 2, 3]
	}
]);

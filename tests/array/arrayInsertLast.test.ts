import { suite } from "@vangware/test";
import { arrayInsertLast } from "../../src/array/arrayInsertLast";

const array = [0, 1, 2, 3];
const string = "string";

export default suite([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the end",
		received: arrayInsertLast(string)(array),
		wanted: [...array, string]
	}
]);

import { arrayInsertLast } from "../../src/array/arrayInsertLast";
import { test } from "../test";

const array = [0, 1, 2, 3];
const string = "string";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the end",
		received: arrayInsertLast(string)(array),
		wanted: [...array, string]
	}
]);
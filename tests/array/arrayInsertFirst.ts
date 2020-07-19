import { test } from "@vangware/test";
import { arrayInsertFirst } from "../../src/array/arrayInsertFirst";

const array = [0, 1, 2, 3];
const string = "string";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the beginning",
		received: arrayInsertFirst(string)(array),
		wanted: [string, ...array]
	}
]);

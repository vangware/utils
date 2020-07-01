import { assert } from "../../assert";
import { arrayUnshift } from "../arrayUnshift";

const array = [0, 1, 2, 3];
const string = "string";

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the beginning",
		received: arrayUnshift(string)(array),
		wanted: [string, ...array]
	}
]);
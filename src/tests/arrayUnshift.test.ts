import { arrayUnshift } from "../arrayUnshift";
import { assert } from "./assert";

const array = [0, 1, 2, 3];
const string = "string";

export const arrayUnshiftAssertions = assert([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the beginning",
		received: arrayUnshift(string)(array),
		wanted: [string, ...array]
	}
]);

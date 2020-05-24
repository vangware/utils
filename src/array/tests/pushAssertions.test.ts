import { assert } from "../../assert";
import { push } from "../push";

const array = [0, 1, 2, 3];
const string = "string";

export const pushAssertions = assert([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the end",
		received: push(string)(array),
		wanted: [...array, string]
	}
]);

import { arrayPush } from "../arrayPush";
import { assert } from "./assert";

const array = [0, 1, 2, 3];
const string = "string";

export const arrayPushAssertions = assert([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the end",
		received: arrayPush(string)(array),
		wanted: [...array, string]
	}
]);

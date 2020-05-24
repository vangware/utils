import { assert } from "../../assert";
import { unshift } from "../unshift";

const array = [0, 1, 2, 3];
const string = "string";

export const unshiftAssertions = assert([
	{
		given: "an array of numbers and a string to insert",
		must: "insert that string at the beginning",
		received: unshift(string)(array),
		wanted: [string, ...array]
	}
]);

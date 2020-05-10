import { isType } from "../isType";
import { assert } from "./assert";

const string = "string";
const isString = isType<string>("string");

export const arrayUnshiftAssertions = assert([
	{
		given: "a string",
		must: "return true",
		received: isString(string),
		wanted: true
	},
	{
		given: "a number and a test for isString",
		must: "return false",
		received: isString(1),
		wanted: false
	}
]);

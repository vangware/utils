import { isType } from "../../src/type/isType";
import { test } from "../test";

const string = "string";
const isString = isType<string>("string");

// eslint-disable-next-line functional/no-expression-statement
test([
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

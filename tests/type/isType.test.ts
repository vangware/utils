import type { Tests } from "@vangware/test";
import { isType } from "../../src/type/isType.js";

const string = "string";
const isString = isType<string>("string");

export default [
	{
		given: "a string",
		must: "return true",
		received: isString(string),
		wanted: true,
	},
	{
		given: "a number and a test for isString",
		must: "return false",
		received: isString(1),
		wanted: false,
	},
] as Tests<boolean>;

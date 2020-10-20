import { suite } from "@vangware/test";
import { isType } from "../../src/type/isType";

const string = "string";
const isString = isType<string>("string");

export default suite([
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

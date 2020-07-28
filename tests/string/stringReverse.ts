import { test } from "@vangware/test";
import { stringReverse } from "../../src/string/stringReverse";

const string = "string";

export default test([
	{
		given: "a simple string",
		must: "return the string reversed",
		received: stringReverse(string),
		wanted: "gnirts"
	}
]);

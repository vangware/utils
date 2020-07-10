import { stringReverse } from "../../src/string/stringReverse";
import { test } from "../test";

const string = "string";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "a simple string",
		must: "return the string reversed",
		received: stringReverse(string),
		wanted: "gnirts"
	}
]);

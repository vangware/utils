import { assert } from "../../assert";
import { stringReverse } from "../stringReverse";

const string = "string";

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "a simple string",
		must: "return the string reversed",
		received: stringReverse(string),
		wanted: "gnirts"
	}
]);

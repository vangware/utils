import { test } from "@vangware/test";
import { arrayFrom } from "../../src/array/arrayFrom";

const string = "string";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "a string",
		must: "return an array of it's characters",
		received: arrayFrom(string),
		wanted: ["s", "t", "r", "i", "n", "g"]
	}
]);

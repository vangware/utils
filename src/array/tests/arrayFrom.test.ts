import { assert } from "../../assert";
import { arrayFrom } from "../arrayFrom";

const string = "string";

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "a string",
		must: "return an array of it's characters",
		received: arrayFrom(string),
		wanted: ["s", "t", "r", "i", "n", "g"]
	}
]);

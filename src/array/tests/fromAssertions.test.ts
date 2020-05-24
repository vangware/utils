import { assert } from "../../assert";
import { from } from "../from";

const string = "string";

export const fromAssertions = assert([
	{
		given: "a string",
		must: "return an array of it's characters",
		received: from(string),
		wanted: ["s", "t", "r", "i", "n", "g"]
	}
]);

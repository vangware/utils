import { assert } from "../../assert";
import { reverse } from "../reverse";

const string = "string";

export const reverseAssertions = assert([
	{
		given: "a simple string",
		must: "return the string reversed",
		received: reverse(string),
		wanted: "gnirts"
	}
]);

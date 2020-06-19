import { assert } from "../../assert";
import { toArray } from "../toArray";

const string = "string";

export const toArrayAssertions = assert([
	{
		given: "a string",
		must: "return an array of it's characters",
		received: toArray(string),
		wanted: ["s", "t", "r", "i", "n", "g"]
	}
]);

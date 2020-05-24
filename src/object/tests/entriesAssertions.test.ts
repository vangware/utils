import { assert } from "../../assert";
import { entries } from "../entries";

const key = "key";
const value = "value";

export const entriesAssertions = assert([
	{
		given: "an object { key: value }",
		must: "return an array of tuples [key, value]",
		received: entries({ [key]: value }),
		wanted: [[key, value]]
	}
]);

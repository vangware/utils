import { objectEntries } from "../objectEntries";
import { assert } from "./assert";

const key = "key";
const value = "value";

export const entriesAssertions = assert([
	{
		given: "an object { key: value }",
		must: "return an array of tuples [key, value]",
		received: objectEntries({ [key]: value }),
		wanted: [[key, value]]
	}
]);

import { assert } from "../../assert";
import { objectEntries } from "../objectEntries";

const key = "key";
const value = "value";

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "an object { key: value }",
		must: "return an array of tuples [key, value]",
		received: objectEntries({ [key]: value }),
		wanted: [[key, value]]
	}
]);

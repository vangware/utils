import { objectEntries } from "../../src/object/objectEntries";
import { test } from "../test";

const key = "key";
const value = "value";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "an object { key: value }",
		must: "return an array of tuples [key, value]",
		received: objectEntries({ [key]: value }),
		wanted: [[key, value]]
	}
]);
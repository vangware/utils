import { test } from "@vangware/test";
import { objectEntries } from "../../src/object/objectEntries";

const key = "key";
const value = "value";

export default test([
	{
		given: "an object { key: value }",
		must: "return an array of tuples [key, value]",
		received: objectEntries({ [key]: value }),
		wanted: [[key, value]]
	}
]);

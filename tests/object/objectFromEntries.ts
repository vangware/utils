import { test } from "@vangware/test";
import { objectFromEntries } from "../../src/object/objectFromEntries";

const key = "key";
const value = "value";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "an array of entries [key, value]",
		must: "return an object with the shape { key: value }",
		received: objectFromEntries<Record<typeof key, typeof value>>([
			[key, value]
		]),
		wanted: { [key]: value }
	}
]);

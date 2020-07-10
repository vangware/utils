import { objectFromEntries } from "../../src/object/objectFromEntries";
import { test } from "../test";

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

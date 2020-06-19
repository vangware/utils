import { assert } from "../../assert";
import { objectFromEntries } from "../objectFromEntries";

const key = "key";
const value = "value";

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "an array of entries [key, value]",
		must: "return an object with the shape { key: value }",
		received: objectFromEntries<Record<typeof key, typeof value>>([
			[key, value]
		]),
		wanted: { [key]: value }
	}
]);

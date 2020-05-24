import { assert } from "../../assert";
import { fromEntries } from "../fromEntries";

const key = "key";
const value = "value";

export const fromEntriesAssertions = assert([
	{
		given: "an array of entries [key, value]",
		must: "return an object with the shape { key: value }",
		received: fromEntries<Record<typeof key, typeof value>>([[key, value]]),
		wanted: { [key]: value }
	}
]);

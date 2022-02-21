import type { Test } from "@vangware/test";
import type { ReadOnlyRecord } from "@vangware/types";
import { objectFromEntries } from "../../src/object/objectFromEntries.js";

const key = "key";
const value = "value";

export default {
	given: "an array of entries [key, value]",
	must: "return an object with the shape { key: value }",
	received: objectFromEntries<Record<typeof key, typeof value>>([
		[key, value],
	]),
	wanted: { [key]: value },
} as Test<ReadOnlyRecord<string>>;

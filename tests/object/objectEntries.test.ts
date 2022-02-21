import type { Test } from "@vangware/test";
import type { Entries } from "@vangware/types";
import { objectEntries } from "../../src/object/objectEntries.js";

const key = "key";
const value = "value";

export default {
	given: "an object { key: value }",
	must: "return an array of tuples [key, value]",
	received: objectEntries({ [key]: value }),
	wanted: [[key, value]],
} as Test<Entries<string, string>>;

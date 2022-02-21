import type { Test } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arrayFrom } from "../../src/array/arrayFrom.js";

const string = "string";

export default {
	given: "a string",
	must: "return an array of it's characters",
	received: arrayFrom(string),
	wanted: ["s", "t", "r", "i", "n", "g"],
} as Test<ReadOnlyArray<string>>;

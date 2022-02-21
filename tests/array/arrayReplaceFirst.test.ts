import type { Test } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arrayReplaceFirst } from "../../src/array/arrayReplaceFirst.js";

const array = [0, 1, 2, 3];
const string = "string";

export default {
	given: "an array of numbers and a string to insert",
	must: "insert that string at the beginning",
	received: arrayReplaceFirst(string)(array),
	wanted: [string, 1, 2, 3],
} as Test<ReadOnlyArray<number | string>>;

import type { Test } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arrayReplaceLast } from "../../src/array/arrayReplaceLast.js";

const array = [0, 1, 2, 3];
const string = "string";

export default {
	given: "an array of numbers and a string to insert",
	must: "insert that string at the end",
	received: arrayReplaceLast(string)(array),
	wanted: [0, 1, 2, string],
} as Test<ReadOnlyArray<number | string>>;

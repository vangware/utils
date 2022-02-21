import type { Test } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arrayInsertLast } from "../../src/array/arrayInsertLast.js";

const array = [0, 1, 2, 3];
const string = "string";

export default {
	given: "an array of numbers and a string to insert",
	must: "insert that string at the end",
	received: arrayInsertLast(string)(array),
	wanted: [...array, string],
} as Test<ReadOnlyArray<number | string>>;

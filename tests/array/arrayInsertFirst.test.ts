import type { Test } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arrayInsertFirst } from "../../src/array/arrayInsertFirst.js";

const array = [0, 1, 2, 3];
const string = "string";

export default {
	given: "an array of numbers and a string to insert",
	must: "insert that string at the beginning",
	received: arrayInsertFirst(string)(array),
	wanted: [string, ...array],
} as Test<ReadOnlyArray<number | string>>;

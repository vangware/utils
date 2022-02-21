import type { Test } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arraySlice } from "../../src/array/arraySlice.js";

const array = [0, 1, 2, 3];

export default {
	given: "an array of numbers",
	must: "return a slice of it",
	received: arraySlice(1)(3)(array),
	wanted: [1, 2],
} as Test<ReadOnlyArray<number>>;

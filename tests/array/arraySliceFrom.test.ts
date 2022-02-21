import type { Test } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arraySliceFrom } from "../../src/array/arraySliceFrom.js";

const array = [0, 1, 2, 3];

export default {
	given: "an array of numbers",
	must: "return a slice of it",
	received: arraySliceFrom(1)(array),
	wanted: [1, 2, 3],
} as Test<ReadOnlyArray<number>>;

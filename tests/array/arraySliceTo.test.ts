import type { Test } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arraySliceTo } from "../../src/array/arraySliceTo.js";

const array = [0, 1, 2, 3];

export default {
	given: "an array of numbers",
	must: "return a slice of it",
	received: arraySliceTo(3)(array),
	wanted: [0, 1, 2],
} as Test<ReadOnlyArray<number>>;

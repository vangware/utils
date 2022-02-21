import type { Test } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arrayMap } from "../../src/array/arrayMap.js";

const array = [0, 1, 2, 3];

export default {
	given: "an array of numbers and a map that doubles",
	must: "get an array with all values duplicated",
	received: arrayMap((value: number) => value * 2)(array),
	wanted: [0, 2, 4, 6],
} as Test<ReadOnlyArray<number>>;

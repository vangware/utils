import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arrayReverse } from "../../src/array/arrayReverse.js";

const array = [0, 1, 2, 3];

export default [
	{
		given: "an array of numbers",
		must: "return the same array with values in reversed order",
		received: arrayReverse(array),
		wanted: [3, 2, 1, 0],
	},
	{
		given: "an array of numbers and a double reverse",
		must: "return the same array",
		received: arrayReverse(arrayReverse(array)),
		wanted: array,
	},
] as Tests<ReadOnlyArray<number>>;

import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { arrayFilterIn } from "../../src/array/arrayFilterIn.js";

const array = [0, 1, 2, 3];
const nothing = (_: unknown) => false;
const filterEverything = arrayFilterIn(nothing);
const isEven = (item: number) => item % 2 === 0;
const filterOdds = arrayFilterIn(isEven);

export default [
	{
		given: "an array of numbers and an always false filter",
		must: "return an empty array",
		received: filterEverything(array),
		wanted: [],
	},
	{
		given: "an array of numbers and an even number filter",
		must: "return only even numbers",
		received: filterOdds(array),
		wanted: [0, 2],
	},
] as Tests<ReadOnlyArray<number>>;

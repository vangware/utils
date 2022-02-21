import type { Test } from "@vangware/test";
import { arrayJoin } from "../../src/array/arrayJoin.js";

const spaceJoin = arrayJoin(" ");
const array = [0, 1, 2, 3];

export default {
	given: "an array of numbers",
	must: "return those numbers separated by spaces",
	received: spaceJoin(array),
	wanted: "0 1 2 3",
} as Test<string>;

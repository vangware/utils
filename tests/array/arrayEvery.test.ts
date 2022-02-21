import type { Tests } from "@vangware/test";
import { arrayEvery } from "../../src/array/arrayEvery.js";
import { isNumber } from "../../src/type/isNumber.js";

const everyNumber = arrayEvery(isNumber);

export default [
	{
		given: "an array of numbers",
		must: "return true",
		received: everyNumber([0, 1, 2, 3]),
		wanted: true,
	},
	{
		given: "an array of numbers with a string on it",
		must: "return false",
		received: everyNumber([0, 1, 2, "foo", 3]),
		wanted: false,
	},
] as Tests<boolean>;

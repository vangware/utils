import type { Tests } from "@vangware/test";
import { arraySome } from "../../src/array/arraySome.js";
import { isNumber } from "../../src/type/isNumber.js";

const someNumber = arraySome(isNumber);

export default [
	{
		given: "an array of numbers",
		must: "return true",
		received: someNumber([0, 1, 2, 3]),
		wanted: true,
	},
	{
		given: "an array of numbers with a string on it",
		must: "return true",
		received: someNumber([0, 1, 2, "foo", 3]),
		wanted: true,
	},
	{
		given: "an array of strings",
		must: "return false",
		received: someNumber(["foo", "bar"]),
		wanted: false,
	},
] as Tests<boolean>;

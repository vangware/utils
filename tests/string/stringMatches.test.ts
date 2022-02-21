import type { Tests } from "@vangware/test";
import type { ReadOnlyArray } from "@vangware/types";
import { stringMatches } from "../../src/string/stringMatches.js";

const onlyHasNumbers = stringMatches(/\d/gu);

export default [
	{
		given: "a string with numbers and a number validation",
		must: "return array with all numbers matching",
		received: onlyHasNumbers("1234"),
		wanted: ["1", "2", "3", "4"],
	},
	{
		given: "a string with letters and a number validation",
		must: "return empty match array",
		received: onlyHasNumbers("nope"),
		wanted: [],
	},
] as Tests<ReadOnlyArray<string>>;

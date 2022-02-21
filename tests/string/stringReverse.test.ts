import type { Test } from "@vangware/test";
import { stringReverse } from "../../src/string/stringReverse.js";

const string = "string";

export default {
	given: "a simple string",
	must: "return the string reversed",
	received: stringReverse(string),
	wanted: "gnirts",
} as Test<string>;

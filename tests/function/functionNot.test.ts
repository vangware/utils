import type { Test } from "@vangware/test";
import { functionNot } from "../../src/function/functionNot.js";

const isEven = (value: number) => value % 2 === 0;
const isOdd = functionNot(isEven);

export default {
	given: "a function that returns true when receiving even numbers",
	must: "return true when calling it with odds",
	received: isOdd(1),
	wanted: true,
} as Test<boolean>;

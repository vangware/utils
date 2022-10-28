import type { Tests } from "@vangware/test";
import { whenIsAsynchronousIterable } from "../src/whenIsAsynchronousIterable.js";

const whenIsAsynchronousIterableTest = whenIsAsynchronousIterable(
	() => "truthy",
)(() => "falsy");

export default [
	{
		given: "a whenIsAsynchronousIterable with an array",
		must: "receive the truthy value",
		received: () => whenIsAsynchronousIterableTest([]),
		wanted: () => "truthy",
	},
	{
		given: "a whenIsAsynchronousIterable without an array",
		must: "receive the falsy value",
		received: () => whenIsAsynchronousIterableTest(false),
		wanted: () => "falsy",
	},
] as Tests<() => string>;

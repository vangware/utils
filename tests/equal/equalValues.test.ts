import type { Tests } from "@vangware/test";
import { equalValues } from "../../src/equal/equalValues.js";

const value = "foo";
const valueCopy = value;
const otherValue = "bar";

export default [
	{
		given: "two equal values",
		must: "return true",
		received: equalValues(value)(valueCopy),
		wanted: true,
	},
	{
		given: "two different dates",
		must: "return false",
		received: equalValues(value)(otherValue),
		wanted: false,
	},
	{
		given: "two equal objects",
		must: "return false",
		received: equalValues({})({}),
		wanted: false,
	},
	{
		given: "two equal arrays",
		must: "return false",
		received: equalValues([])([]),
		wanted: false,
	},
] as Tests<boolean>;

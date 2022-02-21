import type { Tests } from "@vangware/test";
import { equal } from "../../src/equal/equal.js";

export default [
	{
		given: "two equal strings",
		must: "return true",
		received: equal("")(""),
		wanted: true,
	},
	{
		given: "two equal numbers",
		must: "return true",
		received: equal(0)(0),
		wanted: true,
	},
	{
		given: "two equal booleans",
		must: "return true",
		received: equal(true)(true),
		wanted: true,
	},
	{
		given: "two equal objects",
		must: "return true",
		received: equal({})({}),
		wanted: true,
	},
	{
		given: "two equal arrays",
		must: "return true",
		received: equal([])([]),
		wanted: true,
	},
	{
		given: "two similar (but not equal) objects",
		must: "return false",
		received: equal({ foo: "foo" })({ foo: "bar" }),
		wanted: false,
	},
	{
		given: "two similar (but not equal) arrays",
		must: "return true",
		received: equal([1, 2, 3])([1, 2, 3, 4]),
		wanted: false,
	},
] as Tests<boolean>;

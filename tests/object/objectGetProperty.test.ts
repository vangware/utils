import type { Tests } from "@vangware/test";
import { objectGetProperty } from "../../src/object/objectGetProperty.js";

const getFoo = objectGetProperty("foo");

export default [
	{
		given: "a getter for a property foo and a object containing that",
		must: "get the value of foo",
		received: getFoo({ foo: "bar" }),
		wanted: "bar",
	},
	{
		given: "a getter for a property foo and a object not containing that",
		must: "get undefined",
		received: getFoo({ bar: "foo" }),
		wanted: undefined,
	},
] as Tests<string | undefined>;

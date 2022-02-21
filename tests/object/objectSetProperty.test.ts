import type { Tests } from "@vangware/test";
import type { ReadOnlyRecord } from "@vangware/types";
import { objectSetProperty } from "../../src/object/objectSetProperty.js";

const setFoo = objectSetProperty("foo")("bar");

export default [
	{
		given: "a setter for a property foo and a object containing that",
		must: "get the value of foo",
		received: setFoo({ foo: 1 }),
		wanted: { foo: "bar" },
	},
	{
		given: "a getter for a property foo and a object not containing that",
		must: "get undefined",
		received: setFoo({ bar: "foo" }),
		wanted: { bar: "foo", foo: "bar" },
	},
] as Tests<ReadOnlyRecord<string>>;

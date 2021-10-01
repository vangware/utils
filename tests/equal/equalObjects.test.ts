import { suite } from "@vangware/test";
import { equal } from "../../src/equal/equal";
import { equalObjects } from "../../src/equal/equalObjects";

const object = { foo: "foo" };
const objectCopy = { ...object };
const otherObject = { bar: "bar" };
const objectCopyWithExtras = { ...object, ...otherObject };

export default suite([
	{
		given: "two equal objects",
		must: "return true",
		received: equalObjects(equal)(object)(objectCopy),
		wanted: true,
	},
	{
		given: "two different objects",
		must: "return false",
		received: equalObjects(equal)(object)(otherObject),
		wanted: false,
	},
	{
		given: "two objects almost equal",
		must: "return false",
		received: equalObjects(equal)(object)(objectCopyWithExtras),
		wanted: false,
	},
	{
		given: "an object and a number",
		must: "return false",
		received: equalObjects(equal)(object)(0),
		wanted: false,
	},
	{
		given: "a number and an object",
		must: "return false",
		received: equalObjects(equal)(0)(object),
		wanted: false,
	},
	{
		given: "two numbers",
		must: "return false",
		received: equalObjects(equal)(0)(0),
		wanted: false,
	},
]);

import { suite } from "@vangware/test";
import { equalValues } from "../../src/equal/equalValues";

const value = "foo";
const valueCopy = value;
const otherValue = "bar";

export default suite([
	{
		given: "two equal values",
		must: "return true",
		received: equalValues(value)(valueCopy),
		wanted: true
	},
	{
		given: "two different dates",
		must: "return false",
		received: equalValues(value)(otherValue),
		wanted: false
	},
	{
		given: "two equal objects",
		must: "return false",
		received: equalValues({})({}),
		wanted: false
	},
	{
		given: "two equal arrays",
		must: "return false",
		received: equalValues([])([]),
		wanted: false
	}
]);

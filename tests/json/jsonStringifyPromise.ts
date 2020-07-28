import { test } from "@vangware/test";
import { jsonStringifyPromise } from "../../src/json/jsonStringifyPromise";

const circularObject = {
	// eslint-disable-next-line functional/functional-parameters
	get circularProperty() {
		// eslint-disable-next-line functional/no-this-expression
		return this;
	}
};
const key = "key";
const value = "value";

export default test([
	{
		given: "an object with a circular reference",
		must: "catch without throwing",
		received: jsonStringifyPromise(circularObject).catch(_ => value),
		wanted: value
	},
	{
		given: "a valid object",
		must: "turn it into JSON",
		received: jsonStringifyPromise({ [key]: value }),
		wanted: `{"${key}":"${value}"}`
	}
]);

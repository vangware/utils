import { assert } from "../../assert";
import { stringifyPromise } from "../stringifyPromise";

const circularObject = {
	// eslint-disable-next-line functional/functional-parameters
	get circularProperty() {
		// eslint-disable-next-line functional/no-this-expression
		return this;
	}
};
const key = "key";
const value = "value";

export const stringifyPromiseAssertions = assert([
	{
		given: "an object with a circular reference",
		must: "catch without throwing",
		received: stringifyPromise(circularObject).catch(_ => value),
		wanted: value
	},
	{
		given: "a valid object",
		must: "turn it into JSON",
		received: stringifyPromise({ [key]: value }),
		wanted: `{"${key}":"${value}"}`
	}
]);

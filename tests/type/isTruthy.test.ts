import { suite } from "@vangware/test";
import { isTruthy } from "../../src/type/isTruthy";

const wantedFalse = { must: "return false", wanted: false };
const wantedTrue = { must: "return true", wanted: true };

export default suite([
	{
		given: "a falsy number",
		received: isTruthy(0) && isTruthy(NaN),
		...wantedFalse
	},
	{
		given: "an empty string",
		received: isTruthy(""),
		...wantedFalse
	},
	{
		given: "a false boolean",
		received: isTruthy(false),
		...wantedFalse
	},
	{
		given: "a nullish value",
		// eslint-disable-next-line no-null/no-null
		received: isTruthy(null) && isTruthy(undefined),
		...wantedFalse
	},
	{
		given: "a truthy number",
		received: isTruthy(1),
		...wantedTrue
	},
	{
		given: "a non-empty string",
		received: isTruthy("string"),
		...wantedTrue
	},
	{
		given: "a true boolean",
		received: isTruthy(true),
		...wantedTrue
	}
]);

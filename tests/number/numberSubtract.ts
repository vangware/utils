import { test } from "@vangware/test";
import { numberSubtract } from "../../src/number/numberSubtract";

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "1 and 0.1",
		must: "get 0.9",
		received: numberSubtract(0.1)(1),
		wanted: 0.9
	},
	{
		given: "1 and 0.5",
		must: "get 0.5",
		received: numberSubtract(0.5)(1),
		wanted: 0.5
	},
	{
		given: "100000 and 1000",
		must: "get 99000",
		received: numberSubtract(1000)(100000),
		wanted: 99000
	},
	{
		given: "1 and 0",
		must: "get 1",
		received: numberSubtract(0)(1),
		wanted: 1
	}
]);

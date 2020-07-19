import { test } from "@vangware/test";
import { arraySliceTo } from "../../src/array/arraySliceTo";

const array = [0, 1, 2, 3];

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "an array of numbers",
		must: "return a slice of it",
		received: arraySliceTo(3)(array),
		wanted: [0, 1, 2]
	}
]);

import { test } from "@vangware/test";
import { arraySliceFrom } from "../../src/array/arraySliceFrom";

const array = [0, 1, 2, 3];

export default test([
	{
		given: "an array of numbers",
		must: "return a slice of it",
		received: arraySliceFrom(1)(array),
		wanted: [1, 2, 3]
	}
]);

import { assert } from "../../assert";
import { arraySlice } from "../arraySlice";

const array = [0, 1, 2, 3];

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "an array of numbers",
		must: "return a slice of it",
		received: arraySlice(1)(3)(array),
		wanted: [1, 2]
	}
]);
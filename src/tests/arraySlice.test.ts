import { arraySlice } from "../arraySlice";
import { assert } from "./assert";

const array = [0, 1, 2, 3];

export const arraySliceAssertions = assert([
	{
		given: "an array of numbers",
		must: "return a slice of it",
		received: arraySlice(1)(3)(array),
		wanted: [1, 2]
	}
]);

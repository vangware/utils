import { assert } from "../../assert";
import { slice } from "../slice";

const array = [0, 1, 2, 3];

export const sliceAssertions = assert([
	{
		given: "an array of numbers",
		must: "return a slice of it",
		received: slice(1)(3)(array),
		wanted: [1, 2]
	}
]);

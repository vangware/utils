import { arrayMap } from "../arrayMap";
import { assert } from "./assert";

const array = [0, 1, 2, 3];

export const arrayMapAssertions = assert([
	{
		given: "an array of numbers and a map that doubles",
		must: "get an array with all values duplicated",
		received: arrayMap<number>(value => value * 2)(array),
		wanted: [0, 2, 4, 6]
	}
]);

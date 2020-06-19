import { assert } from "../../assert";
import { arrayMap } from "../arrayMap";

const array = [0, 1, 2, 3];

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "an array of numbers and a map that doubles",
		must: "get an array with all values duplicated",
		received: arrayMap<number>(value => value * 2)(array),
		wanted: [0, 2, 4, 6]
	}
]);

import { arrayMap } from "../../src/array/arrayMap";
import { test } from "../test";

const array = [0, 1, 2, 3];

// eslint-disable-next-line functional/no-expression-statement
test([
	{
		given: "an array of numbers and a map that doubles",
		must: "get an array with all values duplicated",
		received: arrayMap((value: number) => value * 2)(array),
		wanted: [0, 2, 4, 6]
	}
]);

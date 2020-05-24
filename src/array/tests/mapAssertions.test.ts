import { assert } from "../../assert";
import { map } from "../map";

const array = [0, 1, 2, 3];

export const mapAssertions = assert([
	{
		given: "an array of numbers and a map that doubles",
		must: "get an array with all values duplicated",
		received: map<number>(value => value * 2)(array),
		wanted: [0, 2, 4, 6]
	}
]);

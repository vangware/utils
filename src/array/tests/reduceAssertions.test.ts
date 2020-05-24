import { assert } from "../../assert";
import { reduce } from "../reduce";

const array = [0, 1, 2, 3];

export const reduceAssertions = assert([
	{
		given: "an array of numbers and a sum reducer",
		must: "return the total sum",
		received: reduce<number, number>(output => value => output + value)(0)(
			array
		),
		wanted: 6
	}
]);

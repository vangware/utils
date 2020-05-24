import { assert } from "../../assert";
import { not } from "../not";

const isEven = (value: number) => value % 2 === 0;
const isOdd = not(isEven);

export const notAssertions = assert([
	{
		given: "a function that returns true when receiving even numbers",
		must: "return true when calling it with odds",
		received: isOdd(1),
		wanted: true
	}
]);

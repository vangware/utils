import { functionNot } from "../functionNot";
import { assert } from "./assert";

const isEven = (value: number) => value % 2 === 0;
const isOdd = functionNot(isEven);

export const arrayUnshiftAssertions = assert([
	{
		given: "a function that returns true when receiving even numbers",
		must: "return true when calling it with odds",
		received: isOdd(1),
		wanted: true
	}
]);

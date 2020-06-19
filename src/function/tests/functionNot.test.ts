import { assert } from "../../assert";
import { functionNot } from "../functionNot";

const isEven = (value: number) => value % 2 === 0;
const isOdd = functionNot(isEven);

// eslint-disable-next-line functional/no-expression-statement
assert([
	{
		given: "a function that returns true when receiving even numbers",
		must: "return true when calling it with odds",
		received: isOdd(1),
		wanted: true
	}
]);

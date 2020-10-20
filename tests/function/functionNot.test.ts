import { suite } from "@vangware/test";
import { functionNot } from "../../src/function/functionNot";

const isEven = (value: number) => value % 2 === 0;
const isOdd = functionNot(isEven);

export default suite([
	{
		given: "a function that returns true when receiving even numbers",
		must: "return true when calling it with odds",
		received: isOdd(1),
		wanted: true
	}
]);

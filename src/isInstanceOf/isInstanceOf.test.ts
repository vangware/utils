import test from "ava";
import { randomLengthNumberArray, randomLengthStringArray } from "../tests";
import isInstanceOf from "./isInstanceOf";

test("works as expected", t => {
	const TEST_OBJECT = { valid: true };
	const TEST_ARRAY_NUMBER = randomLengthNumberArray();
	const TEST_ARRAY_STRING = randomLengthStringArray();

	t.assert(isInstanceOf(TEST_OBJECT, Object));
	t.assert(isInstanceOf(TEST_ARRAY_NUMBER, Array));
	t.assert(isInstanceOf(TEST_ARRAY_STRING, Array));
});

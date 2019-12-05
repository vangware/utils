/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { ARRAY_NUMBER, STRING_1, STRING_2 } from "../testConstants";
import isInstanceOf from "./isInstanceOf";

test("works as expected", assert => {
	assert.true(isInstanceOf({ [STRING_1]: STRING_2 }, Object));
	assert.true(isInstanceOf(ARRAY_NUMBER, Array));
	assert.true(isInstanceOf([STRING_1, STRING_2], Array));
});

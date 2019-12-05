/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isNumber from "./isNumber";

test("checks Number correctly", assert => {
	assert.true(isNumber(NUMBER));
	assert.true(isNumber(Number.POSITIVE_INFINITY));
	assert.true(isNumber(Number.NEGATIVE_INFINITY));
	assert.true(isNumber(NaN));
	assert.false(isNumber(undefined));
	assert.false(isNumber(EMPTY_ARRAY));
	assert.false(isNumber(EMPTY_OBJECT));
	assert.false(isNumber(STRING_1));
});

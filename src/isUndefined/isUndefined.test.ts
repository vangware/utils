/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isUndefined from "./isUndefined";

test("checks undefined correctly", assert => {
	assert.true(isUndefined(undefined));
	assert.true(isUndefined(void 0));
	assert.false(isUndefined(EMPTY_ARRAY));
	assert.false(isUndefined(EMPTY_OBJECT));
	assert.false(isUndefined(STRING_1));
	assert.false(isUndefined(NUMBER));
});

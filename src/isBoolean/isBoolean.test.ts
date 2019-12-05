/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isBoolean from "./isBoolean";

test("checks Boolean correctly", assert => {
	assert.true(isBoolean(true));
	assert.true(isBoolean(false));
	assert.false(isBoolean(undefined));
	assert.false(isBoolean(EMPTY_ARRAY));
	assert.false(isBoolean(EMPTY_OBJECT));
	assert.false(isBoolean(STRING_1));
	assert.false(isBoolean(NUMBER));
});

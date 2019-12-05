/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isString from "./isString";

test("checks String correctly", assert => {
	assert.true(isString(STRING_1));
	assert.true(isString(EMPTY_STRING));
	assert.false(isString(undefined));
	assert.false(isString(EMPTY_ARRAY));
	assert.false(isString(EMPTY_OBJECT));
	assert.false(isString(NUMBER));
});

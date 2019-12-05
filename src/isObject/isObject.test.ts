/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isObject from "./isObject";

test("checks Object correctly", assert => {
	assert.true(isObject(EMPTY_OBJECT));
	assert.true(isObject(EMPTY_ARRAY));
	// eslint-disable-next-line no-null/no-null
	assert.false(isObject(null));
	assert.false(isObject(undefined));
	assert.false(isObject(STRING_1));
	assert.false(isObject(NUMBER));
});

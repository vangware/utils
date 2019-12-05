/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import noop from "../noop";
import { NUMBER, STRING_1 } from "../testConstants";
import isFunction from "./isFunction";

test("checks Function correctly", assert => {
	assert.true(isFunction(noop));
	assert.false(isFunction(undefined));
	assert.false(isFunction(EMPTY_ARRAY));
	assert.false(isFunction(EMPTY_OBJECT));
	assert.false(isFunction(STRING_1));
	assert.false(isFunction(NUMBER));
});

/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isArray from "./isArray";

test("checks Array correctly", assert => {
	assert.true(isArray(EMPTY_ARRAY));
	assert.false(isArray(undefined));
	assert.false(isArray(EMPTY_OBJECT));
	assert.false(isArray(STRING_1));
	assert.false(isArray(NUMBER));
});

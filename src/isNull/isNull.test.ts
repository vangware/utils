/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isNull from "./isNull";

test("checks null correctly", assert => {
	// eslint-disable-next-line no-null/no-null
	assert.true(isNull(null));
	assert.false(isNull(undefined));
	assert.false(isNull(EMPTY_ARRAY));
	assert.false(isNull(EMPTY_OBJECT));
	assert.false(isNull(STRING_1));
	assert.false(isNull(NUMBER));
});

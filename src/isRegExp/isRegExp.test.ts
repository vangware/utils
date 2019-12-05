/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isRegExp from "./isRegExp";

test("checks Promise correctly", assert => {
	assert.true(isRegExp(/./u));
	assert.false(isRegExp(undefined));
	assert.false(isRegExp(EMPTY_OBJECT));
	assert.false(isRegExp(STRING_1));
	assert.false(isRegExp(NUMBER));
});

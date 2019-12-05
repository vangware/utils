/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isDate from "./isDate";

test("checks Date correctly", assert => {
	assert.true(isDate(new Date()));
	assert.false(isDate(undefined));
	assert.false(isDate(EMPTY_OBJECT));
	assert.false(isDate(STRING_1));
	assert.false(isDate(NUMBER));
});

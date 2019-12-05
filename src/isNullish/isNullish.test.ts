/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isNullish from "./isNullish";

test("checks null and undefined correctly", assert => {
	// eslint-disable-next-line no-null/no-null
	assert.true(isNullish(null));
	assert.true(isNullish(undefined));
	assert.false(isNullish(EMPTY_ARRAY));
	assert.false(isNullish(EMPTY_OBJECT));
	assert.false(isNullish(STRING_1));
	assert.false(isNullish(NUMBER));
});

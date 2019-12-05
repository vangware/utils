/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isBigInt from "./isBigInt";

test("checks BigInt correctly", assert => {
	assert.true(isBigInt(BigInt(1)));
	assert.true(isBigInt(BigInt("1")));
	assert.false(isBigInt(undefined));
	assert.false(isBigInt(EMPTY_ARRAY));
	assert.false(isBigInt(EMPTY_OBJECT));
	assert.false(isBigInt(STRING_1));
	assert.false(isBigInt(NUMBER));
});

/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import noop from "../noop";
import { NUMBER, STRING_1 } from "../testConstants";
import isPromise from "./isPromise";

test("checks Promise correctly", assert => {
	assert.true(isPromise(new Promise(noop)));
	assert.false(isPromise(undefined));
	assert.false(isPromise(EMPTY_OBJECT));
	assert.false(isPromise(STRING_1));
	assert.false(isPromise(NUMBER));
});

/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import noop from "../noop";
import { NUMBER, STRING_1 } from "../testConstants";
import isFunction from "./isFunction";

test("checks Function correctly", t => {
	t.assert(isFunction(noop));
	t.assert(!isFunction(undefined));
	t.assert(!isFunction(EMPTY_ARRAY));
	t.assert(!isFunction(EMPTY_OBJECT));
	t.assert(!isFunction(STRING_1));
	t.assert(!isFunction(NUMBER));
});

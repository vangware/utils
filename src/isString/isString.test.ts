/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isString from "./isString";

test("checks String correctly", t => {
	t.assert(isString(STRING_1));
	t.assert(isString(EMPTY_STRING));
	t.assert(!isString(undefined));
	t.assert(!isString(EMPTY_ARRAY));
	t.assert(!isString(EMPTY_OBJECT));
	t.assert(!isString(NUMBER));
});

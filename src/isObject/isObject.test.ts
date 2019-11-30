/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isObject from "./isObject";

test("checks Object correctly", t => {
	t.assert(isObject(EMPTY_OBJECT));
	t.assert(isObject(EMPTY_ARRAY));
	// eslint-disable-next-line no-null/no-null
	t.assert(!isObject(null));
	t.assert(!isObject(undefined));
	t.assert(!isObject(STRING_1));
	t.assert(!isObject(NUMBER));
});

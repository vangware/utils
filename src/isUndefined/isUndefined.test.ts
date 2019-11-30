/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isUndefined from "./isUndefined";

test("checks undefined correctly", t => {
	t.assert(isUndefined(undefined));
	t.assert(isUndefined(void 0));
	t.assert(!isUndefined(EMPTY_ARRAY));
	t.assert(!isUndefined(EMPTY_OBJECT));
	t.assert(!isUndefined(STRING_1));
	t.assert(!isUndefined(NUMBER));
});

/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isBoolean from "./isBoolean";

test("checks Boolean correctly", t => {
	t.assert(isBoolean(true));
	t.assert(isBoolean(false));
	t.assert(!isBoolean(undefined));
	t.assert(!isBoolean(EMPTY_ARRAY));
	t.assert(!isBoolean(EMPTY_OBJECT));
	t.assert(!isBoolean(STRING_1));
	t.assert(!isBoolean(NUMBER));
});

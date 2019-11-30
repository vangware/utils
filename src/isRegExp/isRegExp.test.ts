/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isRegExp from "./isRegExp";

test("checks Promise correctly", t => {
	t.assert(isRegExp(/./u));
	t.assert(!isRegExp(undefined));
	t.assert(!isRegExp(EMPTY_OBJECT));
	t.assert(!isRegExp(STRING_1));
	t.assert(!isRegExp(NUMBER));
});

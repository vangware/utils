/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import noop from "../noop";
import { NUMBER, STRING_1 } from "../testConstants";
import isPromise from "./isPromise";

test("checks Promise correctly", t => {
	t.assert(isPromise(new Promise(noop)));
	t.assert(!isPromise(undefined));
	t.assert(!isPromise(EMPTY_OBJECT));
	t.assert(!isPromise(STRING_1));
	t.assert(!isPromise(NUMBER));
});

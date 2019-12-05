/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isSymbol from "./isSymbol";

test("checks Symbol correctly", assert => {
	assert.true(isSymbol(Symbol(STRING_1)));
	assert.false(isSymbol(undefined));
	assert.false(isSymbol(EMPTY_ARRAY));
	assert.false(isSymbol(EMPTY_OBJECT));
	assert.false(isSymbol(STRING_1));
	assert.false(isSymbol(NUMBER));
});

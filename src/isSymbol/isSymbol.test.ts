/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { NUMBER, STRING_1 } from "../testConstants";
import isSymbol from "./isSymbol";

test("checks Symbol correctly", t => {
	t.assert(isSymbol(Symbol(STRING_1)));
	t.assert(!isSymbol(undefined));
	t.assert(!isSymbol(EMPTY_ARRAY));
	t.assert(!isSymbol(EMPTY_OBJECT));
	t.assert(!isSymbol(STRING_1));
	t.assert(!isSymbol(NUMBER));
});

import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isSymbol from "./isSymbol";

test("checks Symbol correctly", t => {
	const RANDOM_STRING = randomString();
	const RANDOM_NUMBER = randomRoundNumber(10);

	t.assert(isSymbol(Symbol("Test")));
	t.assert(!isSymbol(undefined));
	t.assert(!isSymbol(EMPTY_ARRAY));
	t.assert(!isSymbol(EMPTY_OBJECT));
	t.assert(!isSymbol(RANDOM_NUMBER));
	t.assert(!isSymbol(RANDOM_STRING));
});

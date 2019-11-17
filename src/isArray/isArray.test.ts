import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isArray from "./isArray";

test("checks Array correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isArray(EMPTY_ARRAY));
	// eslint-disable-next-line @typescript-eslint/no-array-constructor
	t.assert(isArray(new Array()));
	t.assert(!isArray(undefined));
	t.assert(!isArray(EMPTY_OBJECT));
	t.assert(!isArray(RANDOM_STRING));
	t.assert(!isArray(RANDOM_NUMBER));
});

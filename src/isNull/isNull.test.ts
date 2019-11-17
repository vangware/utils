import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isNull from "./isNull";

test("checks null correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	// eslint-disable-next-line no-null/no-null
	t.assert(isNull(null));
	t.assert(!isNull(undefined));
	t.assert(!isNull(EMPTY_ARRAY));
	t.assert(!isNull(EMPTY_OBJECT));
	t.assert(!isNull(RANDOM_STRING));
	t.assert(!isNull(RANDOM_NUMBER));
});

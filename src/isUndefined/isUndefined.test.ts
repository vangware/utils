import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isUndefined from "./isUndefined";

test("checks undefined correctly", t => {
	const RANDOM_STRING = randomString();
	const RANDOM_NUMBER = randomRoundNumber(10);

	t.assert(isUndefined(undefined));
	t.assert(isUndefined(void 0));
	t.assert(!isUndefined(EMPTY_ARRAY));
	t.assert(!isUndefined(EMPTY_OBJECT));
	t.assert(!isUndefined(RANDOM_NUMBER));
	t.assert(!isUndefined(RANDOM_STRING));
});

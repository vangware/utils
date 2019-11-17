import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isNullish from "./isNullish";

test("checks null and undefined correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	// eslint-disable-next-line no-null/no-null
	t.assert(isNullish(null));
	t.assert(isNullish(undefined));
	t.assert(!isNullish(EMPTY_ARRAY));
	t.assert(!isNullish(EMPTY_OBJECT));
	t.assert(!isNullish(RANDOM_STRING));
	t.assert(!isNullish(RANDOM_NUMBER));
});

import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isBoolean from "./isBoolean";

test("checks Boolean correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isBoolean(true));
	t.assert(isBoolean(false));
	t.assert(!isBoolean(undefined));
	t.assert(!isBoolean(EMPTY_ARRAY));
	t.assert(!isBoolean(EMPTY_OBJECT));
	t.assert(!isBoolean(RANDOM_STRING));
	t.assert(!isBoolean(RANDOM_NUMBER));
});

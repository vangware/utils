import test from "ava";
import { EMPTY_ARRAY, EMPTY_OBJECT, EMPTY_STRING } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isString from "./isString";

test("checks String correctly", t => {
	const RANDOM_STRING = randomString();
	const RANDOM_NUMBER = randomRoundNumber(10);

	t.assert(isString(RANDOM_STRING));
	t.assert(isString(EMPTY_STRING));
	t.assert(!isString(undefined));
	t.assert(!isString(EMPTY_ARRAY));
	t.assert(!isString(EMPTY_OBJECT));
	t.assert(!isString(RANDOM_NUMBER));
});

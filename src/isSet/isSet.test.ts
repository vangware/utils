import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isSet from "./isSet";

test("checks Set correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isSet(new Set()));
	t.assert(!isSet(undefined));
	t.assert(!isSet(EMPTY_OBJECT));
	t.assert(!isSet(RANDOM_STRING));
	t.assert(!isSet(RANDOM_NUMBER));
});

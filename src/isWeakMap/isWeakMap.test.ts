import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isWeakMap from "./isWeakMap";

test("checks WeakMap correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isWeakMap(new WeakMap()));
	t.assert(!isWeakMap(undefined));
	t.assert(!isWeakMap(EMPTY_OBJECT));
	t.assert(!isWeakMap(RANDOM_STRING));
	t.assert(!isWeakMap(RANDOM_NUMBER));
});

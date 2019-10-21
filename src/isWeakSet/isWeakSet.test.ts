import test from "ava";
import { randomRoundNumber, randomString } from "../tests";
import isWeakSet from "./isWeakSet";

test("checks WeakSet correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isWeakSet(new WeakSet()));
	t.assert(!isWeakSet(undefined));
	t.assert(!isWeakSet({}));
	t.assert(!isWeakSet(RANDOM_STRING));
	t.assert(!isWeakSet(RANDOM_NUMBER));
});

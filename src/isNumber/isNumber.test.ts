import test from "ava";
import { randomRoundNumber, randomString } from "../tests";
import isNumber from "./isNumber";

test("checks Number correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isNumber(RANDOM_NUMBER));
	t.assert(isNumber(Number.POSITIVE_INFINITY));
	t.assert(isNumber(Number.NEGATIVE_INFINITY));
	t.assert(isNumber(NaN));
	t.assert(!isNumber(undefined));
	t.assert(!isNumber([]));
	t.assert(!isNumber({}));
	t.assert(!isNumber(RANDOM_STRING));
});

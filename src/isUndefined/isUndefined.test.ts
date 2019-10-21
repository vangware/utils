import test from "ava";
import { randomRoundNumber, randomString } from "../tests";
import isUndefined from "./isUndefined";

test("checks undefined correctly", t => {
	const RANDOM_STRING = randomString();
	const RANDOM_NUMBER = randomRoundNumber(10);

	t.assert(isUndefined(undefined));
	t.assert(isUndefined(void 0));
	t.assert(!isUndefined([]));
	t.assert(!isUndefined({}));
	t.assert(!isUndefined(RANDOM_NUMBER));
	t.assert(!isUndefined(RANDOM_STRING));
});

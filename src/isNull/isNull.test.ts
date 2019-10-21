import test from "ava";
import { randomRoundNumber, randomString } from "../tests";
import isNull from "./isNull";

test("checks null correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	// tslint:disable-next-line: no-null-keyword
	t.assert(isNull(null));
	t.assert(!isNull(undefined));
	t.assert(!isNull([]));
	t.assert(!isNull({}));
	t.assert(!isNull(RANDOM_STRING));
	t.assert(!isNull(RANDOM_NUMBER));
});

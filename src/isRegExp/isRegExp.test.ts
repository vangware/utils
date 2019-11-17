import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isRegExp from "./isRegExp";

test("checks Promise correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isRegExp(/./u));
	// eslint-disable-next-line prefer-regex-literals
	t.assert(isRegExp(new RegExp(".", "u")));
	t.assert(!isRegExp(undefined));
	t.assert(!isRegExp(EMPTY_OBJECT));
	t.assert(!isRegExp(RANDOM_STRING));
	t.assert(!isRegExp(RANDOM_NUMBER));
});

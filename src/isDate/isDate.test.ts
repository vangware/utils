import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isDate from "./isDate";

test("checks Date correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isDate(new Date()));
	t.assert(!isDate(undefined));
	t.assert(!isDate(EMPTY_OBJECT));
	t.assert(!isDate(RANDOM_STRING));
	t.assert(!isDate(RANDOM_NUMBER));
});

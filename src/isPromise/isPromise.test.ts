import test from "ava";
import { EMPTY_OBJECT } from "../constants";
import { randomRoundNumber, randomString } from "../tests";
import isPromise from "./isPromise";

test("checks Promise correctly", t => {
	const RANDOM_NUMBER = randomRoundNumber(10);
	const RANDOM_STRING = randomString();

	t.assert(isPromise(new Promise(() => undefined)));
	t.assert(!isPromise(undefined));
	t.assert(!isPromise(EMPTY_OBJECT));
	t.assert(!isPromise(RANDOM_STRING));
	t.assert(!isPromise(RANDOM_NUMBER));
});
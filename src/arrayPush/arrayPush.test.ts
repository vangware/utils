/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { ARRAY_NUMBER } from "../testConstants";
import arrayPush from "./arrayPush";

test("adds items correctly", t => {
	const ADDED_VALUE = 1;
	const NEW_ARRAY = arrayPush(ARRAY_NUMBER, ADDED_VALUE);
	t.assert(NEW_ARRAY[NEW_ARRAY.length - 1] === ADDED_VALUE);
});

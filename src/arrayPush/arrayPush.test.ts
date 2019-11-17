import test from "ava";
import { randomLengthNumberArray } from "../tests";
import arrayPush from "./arrayPush";

test("adds items correctly", t => {
	const ARRAY = randomLengthNumberArray();
	const ADDED_VALUES = randomLengthNumberArray();
	const NEW_ARRAY = arrayPush(ARRAY, ...ADDED_VALUES);
	t.assert(NEW_ARRAY.length === ARRAY.length + ADDED_VALUES.length);
});

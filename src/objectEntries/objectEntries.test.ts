/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { STRING_1, STRING_2 } from "../testConstants";
import objectEntries from "./objectEntries";

test("Entries are correct", assert => {
	const objectEntriesOutput = objectEntries({ [STRING_1]: STRING_2 });
	assert.deepEqual(objectEntriesOutput[0], [STRING_1, STRING_2]);
});

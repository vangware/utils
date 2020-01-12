/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { STRING_1, STRING_2 } from "../testConstants";
import objectFreeze from "./objectFreeze";

test("Creates a new copy of the given object", assert => {
	const TEST_OBJECT = { [STRING_1]: STRING_1 };
	const objectFreezeOutput = objectFreeze(TEST_OBJECT);
	assert.not(objectFreezeOutput, TEST_OBJECT);
});

test("Frozen copy of object is immutable", assert => {
	const TEST_OBJECT = { [STRING_1]: STRING_1 };
	const objectFreezeOutput = objectFreeze(TEST_OBJECT);
	// eslint-disable-next-line functional/functional-parameters
	assert.throws(() => {
		// eslint-disable-next-line functional/immutable-data
		objectFreezeOutput[`${STRING_1}`] = STRING_2;
	});
	assert.is(objectFreezeOutput[STRING_1], STRING_1);
	assert.not(objectFreezeOutput[STRING_1], STRING_2);
});

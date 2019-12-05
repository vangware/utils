/* eslint-disable functional/no-expression-statement */
import test from "ava";
import { STRING_1, STRING_2 } from "../testConstants";
import objectMap from "./objectMap";

test("maps correctly", assert => {
	const OBJECT = {
		[STRING_1]: STRING_2
	};

	const objectMapOutput = objectMap(OBJECT, (value, key) => ({
		[key]: value
	}));
	assert.true(Array.isArray(objectMapOutput));
	assert.deepEqual(objectMapOutput[0], OBJECT);
});

test("maps even if the value isn't a valid object", assert => {
	// eslint-disable-next-line no-null/no-null
	const objectMapOutput = objectMap(null, (value, key) => ({
		[key]: value
	}));
	assert.true(Array.isArray(objectMapOutput));
});

import test from "ava";
import { randomString } from "../tests";
import objectMap from "./objectMap";

test("maps correctly", t => {
	const PROPERTY_NAME = randomString();
	const PROPERTY_VALUE = randomString();
	const OBJECT = {
		[PROPERTY_NAME]: PROPERTY_VALUE
	};

	const objectMapOutput = objectMap(OBJECT, (value, key) => ({
		[key]: value
	}));
	t.assert(Array.isArray(objectMapOutput));
	t.deepEqual(objectMapOutput[0], OBJECT);
});

test("maps even if the value isn't a valid object", t => {
	// eslint-disable-next-line no-null/no-null
	const objectMapOutput = objectMap(null, (value, key) => ({
		[key]: value
	}));
	t.assert(Array.isArray(objectMapOutput));
});

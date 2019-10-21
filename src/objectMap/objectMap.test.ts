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

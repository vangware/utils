import { suite } from "@vangware/test";
import { objectMap } from "../../src/object/objectMap";

const source = { bar: 0, baz: 1, foo: 2, foobar: 3 };

export default suite([
	{
		given: "an object with number props and a map that doubles",
		must: "get an object with all values duplicated",
		received: objectMap<typeof source>(([key, value]) => [key, value * 2])(
			source,
		),
		wanted: { bar: 0, baz: 2, foo: 4, foobar: 6 },
	},
]);

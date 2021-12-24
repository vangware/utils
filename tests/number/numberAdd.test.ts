import { suite } from "@vangware/test";
import { numberAdd } from "../../src/number/numberAdd.js";

export default suite([
	{
		given: "0.1 and 0.2",
		must: "get 0.3",
		received: numberAdd(0.1)(0.2),
		wanted: 0.3, // Magic!
	},
	{
		given: "1 and 0.5",
		must: "get 1.5",
		received: numberAdd(1)(0.5),
		wanted: 1.5,
	},
	{
		given: "1000 and 100000",
		must: "get 101000",
		received: numberAdd(1000)(100000),
		wanted: 101000,
	},
]);

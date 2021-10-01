import { suite } from "@vangware/test";
import { numberMultiply } from "../../src/number/numberMultiply";

export default suite([
	{
		given: "2 and 0.5",
		must: "get 1",
		received: numberMultiply(2)(0.5),
		wanted: 1,
	},
	{
		given: "0.2 and 0.3",
		must: "get 0.06",
		received: numberMultiply(0.2)(0.3),
		wanted: 0.06,
	},
	{
		given: "10 and 3.5",
		must: "get 35",
		received: numberMultiply(10)(3.5),
		wanted: 35,
	},
]);

export type IsInstanceOfFunction = <ValueType = unknown>(
	value: ValueType,
	constructor: Function
) => boolean;

export default IsInstanceOfFunction;

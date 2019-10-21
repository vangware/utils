export type IsInstanceOfFunction = <ValueType = unknown>(
	value: ValueType,
	// tslint:disable-next-line: ban-types
	constructor: Function
) => boolean;

export default IsInstanceOfFunction;

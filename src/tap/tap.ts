/**
 * Tap into any value.
 * @param observer Observer function.
 */
export const tap = <ValueType>(observer: (value: ValueType) => void) => (
	value: ValueType
): ValueType => {
	observer(value);

	return value;
};

export default tap;

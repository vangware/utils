import TapFunction from "./TapFunction";

/**
 * Tap into any value.
 * @param observer Observer function.
 */
export const tap: TapFunction = observer => value => {
	observer(value);

	return value;
};

export default tap;

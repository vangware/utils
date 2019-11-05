import TapFunction from "./TapFunction";

/**
 * Tap into any value.
 * @param observer - Observer function.
 * @returns Tapped function (calls observer with value and returns it).
 */
export const tap: TapFunction = observer => value => {
	observer(value);

	return value;
};

export default tap;

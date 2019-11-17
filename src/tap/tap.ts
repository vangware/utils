import TapFunction from "./TapFunction";

/**
 * Tap into any value.
 * @param observer - Observer function.
 * @returns Tapped function (calls observer with value and returns it).
 */
export const tap: TapFunction = observer => value =>
	([observer(value), value] as [void, typeof value])[1];

export default tap;

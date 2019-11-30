import TapFunction from "./TapFunction";

/**
 * Tap into any value.
 * @param observer - Observer function.
 * @returns Tapped function (calls observer with value and returns it).
 */
export const tap: TapFunction = observer => value => observer(value);

export default tap;

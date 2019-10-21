import randomLengthArray from "./randomLengthArray";
import randomString from "./randomString";

/**
 * Generates a random length array of strings.
 * @param text String
 * @param maxLength Max length of the array.
 * @param minLength Min length of the array.
 */
export const randomLengthStringArray = (
	text: string = randomString(),
	maxLength = 10,
	minLength = 1
) => randomLengthArray(() => text, maxLength, minLength);

export default randomLengthStringArray;

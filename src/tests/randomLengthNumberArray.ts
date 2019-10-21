import randomLengthArray from "./randomLengthArray";

/**
 * Generates a random length array of strings.
 * @param maxLength Max length of the array.
 * @param minLength Min length of the array.
 */
export const randomLengthNumberArray = (maxLength = 10, minLength = 1) =>
	randomLengthArray<number>((_, index) => index, maxLength, minLength);

export default randomLengthNumberArray;

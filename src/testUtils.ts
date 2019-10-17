/**
 * Generate random string.
 */
export const randomString = () =>
	Math.random()
		.toString(36)
		.substring(7);

/**
 * Generates random length array.
 * @param callback Callback that returns value to fill the random length array.
 * @param maxLength Max length of the array.
 * @param minLength Min length of the array.
 */
export const randomLengthArray = <ItemType>(
	callback: (value: ItemType, index: number, array: ItemType[]) => ItemType,
	maxLength = 10,
	minLength = 1
) =>
	new Array(Math.round(Math.random() * (maxLength - 1)) + minLength)
		.fill(undefined)
		.map(callback);

/**
 * Generates a random length array of strings.
 * @param maxLength Max length of the array.
 * @param minLength Min length of the array.
 */
export const randomLengthNumberArray = (maxLength = 10, minLength = 1) =>
	randomLengthArray<number>((_, index) => index, maxLength, minLength);

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

/**
 * Random round number.
 * @param limit Max value.
 * @param min Min value.
 */
export const randomRoundNumber = (limit: number, min = 0) =>
	Math.floor(Math.random() * (limit - min + 1) + min);

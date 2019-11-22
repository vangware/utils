/**
 * Generates random length array.
 *
 * @param callback - Callback that returns value to fill the array.
 * @param maxLength - Max length of the array.
 * @param minLength - Min length of the array.
 * @ignore
 */
export const randomLengthArray = <ItemType>(
	callback: (value: ItemType, index: number, array: ItemType[]) => ItemType,
	maxLength = 10,
	minLength = 1
) =>
	new Array(Math.round(Math.random() * (maxLength - 1)) + minLength)
		.fill(undefined)
		.map(callback);

export default randomLengthArray;

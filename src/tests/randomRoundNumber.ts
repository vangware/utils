/**
 * Random round number.
 * @param limit Max value.
 * @param min Min value.
 */
export const randomRoundNumber = (limit: number, min = 0) =>
	Math.floor(Math.random() * (limit - min + 1) + min);

export default randomRoundNumber;

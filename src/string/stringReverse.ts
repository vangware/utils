/**
 * Takes a source string and returns that string reversed.
 *
 * @example
 * ```typescript
 * const oof = stringReverse("foo"); // off === "oof"
 * const rab = stringReverse("bar"); // rab === "rab"
 * ```
 * @param source String to be reversed.
 * @returns Reversed string.
 */
export const stringReverse = (source: string) => [...source].reverse().join("");

export default stringReverse;

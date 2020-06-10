/**
 * Takes a source string and returns that string reversed.
 *
 * @example
 * ```typescript
 * const oof = reverse("foo"); // off === "oof"
 * const rab = reverse("bar"); // rab === "rab"
 * ```
 * @param source String to be reversed.
 * @returns Reversed string.
 */
export const reverse = (source: string) => [...source].reverse().join("");

export default reverse;

/**
 * Functional alias for `new Intl.NumberFormat()`, which enables
 * language-sensitive number formatting.
 *
 * @category Classes
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
export declare const constructIntlNumberFormat: (
	locales?: string | string[] | undefined,
	options?: Intl.NumberFormatOptions | undefined,
) => Intl.NumberFormat;

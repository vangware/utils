/**
 * Functional alias for `new Intl.DateTimeFormat()`, which enables
 * language-sensitive date and time formatting.
 *
 * @category Classes
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
export declare const constructIntlDateTimeFormat: (
	locales?: string | string[] | undefined,
	options?: Intl.DateTimeFormatOptions | undefined,
) => Intl.DateTimeFormat;

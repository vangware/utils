import type { LocaleIdentifier, ReadOnly } from "@vangware/types";
/**
 * Functional alias for `new Intl.Locale()`, which represents a Unicode locale
 * identifier.
 *
 * @category Classes
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale
 */
export declare const constructIntlLocale: (
	tag: ReadOnly<Intl.Locale | LocaleIdentifier>,
	options?: ReadOnly<Intl.LocaleOptions>,
) => Intl.Locale;

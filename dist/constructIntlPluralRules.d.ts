/**
 * Functional alias for `new Intl.PluralRules()`, which enables
 * plural-sensitive formatting and plural-related language rules.
 *
 * @category Classes
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
 */
export declare const constructIntlPluralRules: (
	locales?: string | string[] | undefined,
	options?: Intl.PluralRulesOptions | undefined,
) => Intl.PluralRules;

import type { LocaleIdentifier, ReadOnlyDeep } from "@vangware/types";
import { construct } from "./construct.js";

/**
 * Functional alias for `new Intl.Locale()`, which represents a Unicode locale
 * identifier.
 *
 * @category Classes
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale
 */
export const constructIntlLocale = construct(Intl.Locale) as (
	tag: ReadOnlyDeep<Intl.Locale | LocaleIdentifier>,
	options?: ReadOnlyDeep<Intl.LocaleOptions>,
) => Intl.Locale;

import type { Nullish } from "./Nullish.js";

/**
 * Types that evaluates to `false` in JS.
 */
export type Falsy = Nullish | "" | 0 | false;

import type { Falsy } from "./Falsy";

/**
 * Generic type to check if value is not Falsy (evaluates to `true` in JS).
 *
 * @template Actual Actual type (if not truthy).
 */
export type Truthy<Actual = unknown> = Actual extends Falsy ? never : Actual;

import objectCreate from "./objectCreate";
import objectFreeze from "./objectFreeze";

/** Empty array. */
export const EMPTY_ARRAY: readonly never[] = objectFreeze([]);

/** Empty object (with no prototype). */
export const EMPTY_OBJECT: {} = objectCreate();

/** Empty string. */
export const EMPTY_STRING = "";

/** 1 second in milliseconds */
export const TIME_SECOND = 1_000;

/** 1 minute in milliseconds */
export const TIME_MINUTE = 60 * TIME_SECOND;

/** 1 hour in milliseconds */
export const TIME_HOUR = 60 * TIME_MINUTE;

/** 1 day in milliseconds */
export const TIME_DAY = 24 * TIME_HOUR;

/** 1 week in milliseconds */
export const TIME_WEEK = 7 * TIME_DAY;

/** 1 work week in milliseconds */
export const TIME_WEEK_WORK = 5 * TIME_DAY;

/** 1 year in milliseconds */
export const TIME_YEAR = 365 * TIME_DAY;

/** 1 year leap in milliseconds */
export const TIME_YEAR_LEAP = 366 * TIME_DAY;

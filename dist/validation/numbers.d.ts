/**
 * A predicate that sees if an element is a number. To be used together with array functions, such as `count` or `filter` or validation.
 */
export declare const isNumber: () => (element: string) => boolean;
/**
 * A predicate that sees if an element is a whole number. To be used together with array functions, such as `count` or `filter` or validation.
 */
export declare const isWholeNumber: () => (element: string) => boolean;
/**
 * A predicate that sees if an element is positive. To be used together with array functions, such as `count` or `filter` or validation.
 */
export declare const isPositive: () => (element: number) => boolean;
/**
 * A predicate that sees if an element is negative. To be used together with array functions, such as `count` or `filter` or validation.
 */
export declare const isNegative: () => (element: number) => boolean;
/**
 * A predicate that sees if an element is strictly positive. To be used together with array functions, such as `count` or `filter` or validation.
 */
export declare const isStrictlyPositive: () => (element: number) => boolean;
/**
 * A predicate that sees if an element is strictly negative. To be used together with array functions, such as `count` or `filter` or validation.
 */
export declare const isStrictlyNegative: () => (element: number) => boolean;
/**
 * A predicate that sees if a number is less than another number. To be used together with array functions, such as `count` or `filter` or validation.
 * @param value The value to compare against.
 */
export declare const isLessThan: (value: number) => (element: number) => boolean;
/**
 * A predicate that sees if a number is less than or equal to another number. To be used together with array functions, such as `count` or `filter` or validation.
 * @param value The value to compare against.
 */
export declare const isLessThanOrEqualTo: (value: number) => (element: number) => boolean;
/**
 * A predicate that sees if a number is greater than another number. To be used together with array functions, such as `count` or `filter` or validation.
 * @param value The value to compare against.
 */
export declare const isGreaterThan: (value: number) => (element: number) => boolean;
/**
 * A predicate that sees if a number is greater than or equal to another number. To be used together with array functions, such as `count` or `filter` or validation.
 * @param value The value to compare against.
 */
export declare const isGreaterThanOrEqualTo: (value: number) => (element: number) => boolean;
/**
 * A predicate that sees if the number is between two other numbers (both inclusive). To be used together with array functions, such as `count` or `filter` or validation.
 * @param min The minimum value (inclusive).
 * @param max The maximum value (inclusive).
 */
export declare const isBetween: (min: number, max: number) => (element: number) => boolean;
/**
 * A predicate that sees if the number is between two other numbers (both exclusive). To be used together with array functions, such as `count` or `filter` or validation.
 * @param min The minimum value (exclusive).
 * @param max The maximum value (exclusive).
 */
export declare const isBetweenExclusive: (min: number, max: number) => (element: number) => boolean;
/**
 * A predicate that sees if the number is between two other numbers (minimum inclusive, maximum exclusive). To be used together with array functions, such as `count` or `filter` or validation.
 * @param min The minimum value (inclusive).
 * @param max The maximum value (exclusive).
 */
export declare const isBetweenInclusiveExclusive: (min: number, max: number) => (element: number) => boolean;
/**
 * A predicate that sees if the number is between two other numbers (minimum exclusive, maximum inclusive). To be used together with array functions, such as `count` or `filter` or validation.
 * @param min The minimum value (exclusive).
 * @param max The maximum value (inclusive).
 */
export declare const isBetweenExclusiveInclusive: (min: number, max: number) => (element: number) => boolean;

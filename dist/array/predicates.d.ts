declare global {
    interface Array<T> {
        /**
         * Counts the number of elements in the array that match the given predicate.
         * @param predicate The predicate to match.
         */
        count(predicate: (element: T) => boolean): number;
    }
}
/**
 * Inverts any given predicate, e.g. `not(isEmpty())` matches any element that is not empty.
 * @param predicate The predicate to invert.
 */
export declare const not: (predicate: (element: any) => boolean) => (element: any) => boolean;
/**
 * A predicate that sees if an element is empty. To be used together with array functions, such as `count` or `filter`.
 */
export declare const emptyElements: () => (element: any) => boolean;
/**
 * A predicate that sees if an element is an exact match. To be used together with array functions, such as `count` or `filter`.
 */
export declare const exactMatch: (value: any) => (element: any) => boolean;
/**
 * A predicate that sees if an elements type is the same as another. To be used together with array functions, such as `count` or `filter`.
 */
export declare const typeMatch: (value: any) => (element: any) => boolean;

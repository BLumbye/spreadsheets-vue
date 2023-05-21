interface SortOptions {
    /**
     * Whether to sort numbers before text.
     */
    numbersFirst?: boolean;
    /**
     * Whether to sort in descending order.
     */
    descending?: boolean;
}
/**
 * Returns a sorted array.
 * Can be sorted numerically or alphabetically.
 * Sorts ascending by default.
 * @param array The array to be sorted.
 * @param option Optional sorting options.
 */
export declare function sortArray(array: (string | number)[], option?: SortOptions): (string | number)[];
/**
 * Returns an array where the specified part of the array is sorted.
 * Sorts ascending by default.
 * @param arr The array to be sorted.
 * @param startIndex The start index of the range to be sorted.
 * @param endIndex The end index of the range to be sorted.
 * @param descending Whether to sort in descending order.
 */
export declare function sortRange<T>(arr: T[], startIndex: number, endIndex: number, descending?: boolean): T[];
export {};

interface sortOption {
    numbersFirst?: boolean;
    descending?: boolean;
}
/**
 * Returns a sorted list.
 * Can be sorted numerically or alphabetically.
 * Sort ascending by default.
 */
export declare function sortList(list: (string | number)[], option?: sortOption): (string | number)[];
/**
 * Returns an array where the specified part of the array is sorted.
 * Sort ascendingly by default.
 * @param arr
 * @param startIndex
 * @param endIndex
 * @param descending Optional sorting option
 */
export declare function sortRange<T>(arr: T[], startIndex: number, endIndex: number, descending?: boolean): T[];
export {};

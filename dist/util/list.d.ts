/**
 * Returns a subarray (list) of the given array from the start index to the end index (exclusive).
 * @param arr
 * @param startIndex
 * @param endIndex
 */
declare function GetInnerRange<T>(arr: T[], startIndex: number, endIndex: number): T[];
/**
 * Returns the number of elements in the array that are not empty (null, undefined or '' ).
 * @param arr
 */
declare function GetEmptyElements<T>(arr: T[]): number;
/**
 * Returns the number of elements in the array that exactly match the given parameter.
 * @param arr
 * @param value
 */
declare function GetExactMatches<T>(arr: T[], value: T): number;
/**
 * Returns the number of elements in the array that are of the same type as the given parameter.
 * @param arr
 * @param value
 */
declare function GetTypeMatches<T>(arr: T[], value: T): number;
/**
 * Flattens a 2D array into a 1D array.
 * @param arr
 */
declare function Flatten<T>(arr: T[][]): T[];

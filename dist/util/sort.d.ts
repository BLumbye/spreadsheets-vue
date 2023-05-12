interface sortOption {
    numbersFirst?: boolean;
    descending?: boolean;
}
/**
 * Returns a sorted list.
 * Can be sorted numerically or alphabetically.
 */
declare function SortedList(list: (string | number)[], option?: sortOption): (string | number)[];
declare var stringArray: string[];
declare var stringArray2: string[];

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
export function sortArray(array: (string | number)[], option?: SortOptions): (string | number)[] {
  let clonedList = [...array];
  const numbers = clonedList.filter((val) => !Number.isNaN(Number(val)));
  const nonNumbers = clonedList.filter((val) => Number.isNaN(Number(val)));

  numbers.sort((a, b) => Number(a) - Number(b));
  nonNumbers.sort();

  if (option?.descending) {
    numbers.reverse();
    nonNumbers.reverse();
  }

  clonedList =
    option?.numbersFirst === undefined || option.numbersFirst
      ? [...numbers, ...nonNumbers]
      : [...nonNumbers, ...numbers];

  return clonedList;
}


/**
 * Returns an array where the specified part of the array is sorted. 
 * Sorts ascending by default.
 * @param arr The array to be sorted.
 * @param startIndex The start index of the range to be sorted.
 * @param endIndex The end index of the range to be sorted.
 * @param descending Whether to sort in descending order.
 */
export function sortRange<T>(arr: T[], startIndex: number, endIndex: number, descending?: boolean): T[] {
  if (startIndex < 0 || endIndex >= arr.length || startIndex >= endIndex) {
    throw new Error('Invalid range specified');
  }

  const range = arr.slice(startIndex, endIndex + 1);
  range.sort();
  if(descending) range.reverse();

  for (let i = startIndex, j = 0; i <= endIndex; i++, j++) {
    arr[i] = range[j];
  }

  return arr;
}
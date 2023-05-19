interface sortOption {
  numbersFirst?: boolean;
  descending?: boolean;
}

/**
 * Returns a sorted list.
 * Can be sorted numerically or alphabetically.
 * Sort ascending by default. 
 */
export function sortList(list: (string | number)[], option?: sortOption): (string | number)[] {
  let clonedList = [...list];
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
 * Sort ascendingly by default.
 * @param arr 
 * @param startIndex 
 * @param endIndex 
 * @param descending Optional sorting option
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
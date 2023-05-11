/** 
 * Returns a subarray (list) of the given array from the start index to the end index (exclusive).
 * @param arr 
 * @param startIndex 
 * @param endIndex 
 */
function innerRange<T>(arr: T[], startIndex: number, endIndex: number): T[] {
  if (startIndex < 0 || endIndex >= arr.length || startIndex > endIndex) {
    throw new Error('Invalid start or end index');
  }

  const subArray: T[] = [];

  for (let i = startIndex; i < endIndex; i++) {
    subArray.push(arr[i]);
  }

  return subArray;
}

/**
 * Returns the number of elements in the array that are not empty (null, undefined or '' ).
 * @param arr 
 */
function emptyElements<T>(arr: T[]): number {
  let count = 0;
  
  for (const element of arr) {
    if (element !== null && element !== undefined && element !== '') {
      count++;
    }
  }
  
  return count;
}

/**
 * Returns the number of elements in the array that exactly match the given parameter.
 * @param arr 
 * @param value 
 */
function exactMatches<T>(arr: T[], value: T): number {
  let count = 0;
  
  for (const element of arr) {
    if (element === value) {
      count++;
    }
  }
  
  return count;
}

/**
 * Returns the number of elements in the array that are of the same type as the given parameter.
 * @param arr 
 * @param value 
 */
function typeMatches<T>(arr: T[], value: T): number {
  let count = 0;
  
  for (const element of arr) {
    if (typeof element === typeof value) {
      count++;
    }
  }
  
  return count;
}


/**
 * Flattens a 2D array into a 1D array.
 * @param arr 
 */
function flatten<T>(arr: T[][]): T[] {
  return arr.reduce((result, current) => result.concat(current), []);
}
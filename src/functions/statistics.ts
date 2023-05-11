/**
 * Calculates the true difference between two given group means using the ratio of the difference in the group means over the pooled standard error of the groups.
 * @param x1 Mean of group 1.
 * @param x2 Mean of group 2.
 * @param s Standard error.
 * @param n1 Number of observations in group 1.
 * @param n2 Number of observations in group 2.
 * @returns The t value. A larger value indicates a more significant difference between the groups.
 */
export function simple_T_Test(x1: number, x2: number, s: number, n1: number, n2: number) {
  return (x1 - x2) / Math.sqrt(Math.pow(s, 2) * (1 / n1 + 1 / n2));
}

/**
 *  Returns the median of the given array. Assumes the array is sorted
 * @param a The array to calculate the median of.
 */
export function median(a: number[]): number | null {
  if (a.length === 0) {
    return null; // Return null for an empty array
  }

  const middleIndex = Math.floor(a.length / 2);

  if (a.length % 2 === 0) {
    // If the array length is even, return the average of the two middle elements
    return (a[middleIndex - 1] + a[middleIndex]) / 2;
  } else {
    // If the array length is odd, return the middle element
    return a[middleIndex];
  }
}

/**
 * Returns the 3 quartiles of the given array.
 * Assumes the array is sorted.
 * @param a The array to calculate the quartiles of.
 */
export function quartiles(a: number[]): { q1: number | null, q2: number | null, q3: number | null } {
  if (a.length === 0) {
    return { q1: null, q2: null, q3: null }; // Return null for an empty array
  }
  const middleIndex = Math.floor(a.length / 2);

  const q2 = median(a);

  let q1: number | null;
  let q3: number | null;

  if (a.length % 2 === 0) {
    // If the array length is even
    const lowerHalf = a.slice(0, middleIndex);
    const upperHalf = a.slice(middleIndex);

    q1 = median(lowerHalf);
    q3 = median(upperHalf);
  } else {
    // If the array length is odd
    const lowerHalf = a.slice(0, middleIndex);
    const upperHalf = a.slice(middleIndex + 1);

    q1 = median(lowerHalf);
    q3 = median(upperHalf);
  }

  return { q1, q2, q3 };
}

/* Examples */

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(median(a)); // 5
console.log(quartiles(a)); // { q1: 2, q2: 5, q3: 8 }

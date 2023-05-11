/**
 * Calculates the true difference between two given group means using the ratio of the difference in the group means over the pooled standard error of the groups.
 * @param x1 Mean of group 1.
 * @param x2 Mean of group 2.
 * @param s Standard error.
 * @param n1 Number of observations in group 1.
 * @param n2 Number of observations in group 2.
 * @returns The t value. A larger value indicates a more significant difference between the groups.
 */
export function Simple_t_test(x1: number, x2: number, s: number, n1: number, n2: number) {
  return (x1 - x2) / Math.sqrt(Math.pow(s, 2) * (1 / n1 + 1 / n2));
}

/**
 * Returns the mean of the given array.
 * @param a The array to calculate the mean of.
 */
export function Mean(a: number[]){
  return Sum(a) / a.length;
}

/**
 *  Returns the sum of the given array.
 * @param a  The array to calculate the sum of.
 */
export function Sum(a: number[]){
  return a.reduce((acc, val) => acc + val, 0);
}

/**
 *  Returns the median of the given array. Assumes the array is sorted
 * @param a The array to calculate the median of.
 */
export function Median(a: number[]): number | null {
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
export function Quartiles(a: number[]): { q1: number | null, q2: number | null, q3: number | null } {
  if (a.length === 0) {
    return { q1: null, q2: null, q3: null }; // Return null for an empty array
  }
  const middleIndex = Math.floor(a.length / 2);

  const q2 = Median(a);

  let q1: number | null;
  let q3: number | null;

  if (a.length % 2 === 0) {
    // If the array length is even
    const lowerHalf = a.slice(0, middleIndex);
    const upperHalf = a.slice(middleIndex);

    q1 = Median(lowerHalf);
    q3 = Median(upperHalf);
  } else {
    // If the array length is odd
    const lowerHalf = a.slice(0, middleIndex);
    const upperHalf = a.slice(middleIndex + 1);

    q1 = Median(lowerHalf);
    q3 = Median(upperHalf);
  }

  return { q1, q2, q3 };
}

function Ifs(){
  if(2>1){
    if(1<2){
      return true;
    }
  }
}


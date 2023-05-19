/**
 * Flattens a 2D array into a 1D array.
 * @param arr The array to flatten.
 */
export function flatten<T>(arr: T[][]): T[] {
  return arr.reduce((result, current) => result.concat(current), []);
}

/**
 * Transposes a matrix
 * @param matrix
 */
export function transpose<T>(matrix: T[][]): T[][] {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}
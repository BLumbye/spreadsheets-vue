/**
 * Returns the mean of the given array.
 * @param a The array to calculate the mean of.
 */
export function arrayMean(a: number[]){
  return arraySum(a) / a.length;
}

/**
 *  Returns the sum of the given array.
 * @param a  The array to calculate the sum of.
 */
export function arraySum(a: number[]){
  return a.reduce((acc, val) => acc + val, 0);
}


/* Examples */

let a = [1, 12, 23, 45, 5];
console.log(arrayMean(a)); // 17.2
console.log(arraySum(a)); // 86

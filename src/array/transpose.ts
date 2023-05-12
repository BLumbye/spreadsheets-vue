/**
 * Transposes a matrix
 * @param matrix 
 */
export default function transpose<T>(matrix: T[][]): T[][] {
  return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}

/* Examples */
let matrix = [[1,2,3],[4,5,6],[7,8,9],[10,11,12]];
console.log(transpose(matrix)); // [ [ 1, 4, 7, 10 ], [ 2, 5, 8, 11 ], [ 3, 6, 9, 12 ] ]

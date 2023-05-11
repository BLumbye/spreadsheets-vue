import { parseValue } from '../util/parse';

/**
 * Returns an array with potentially mixed types based on the given CSV string.
 * @param csvString 
 */
function parseCSV(csvString: string): Array<string | number | Date | boolean | null> {
  const lines = csvString.split('\n');
  const result: Array<string | number | Date | boolean | null> = [];

  for (let line of lines) {
    const values = line.split(',');

    for (let value of values) {
      // Trim leading/trailing whitespace from each value
      value = value.trim();

      result.push(parseValue(value));
    }
  }

  return result;
}



/* Examples */

let csv = "2, TRUE, John";
console.log(parseCSV(csv)); // [2, true, "John"]
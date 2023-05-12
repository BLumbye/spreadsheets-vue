/**
 * Returns an array with potentially mixed types based on the given CSV string.
 * @param csvString 
 */
export function parseCSV(csvString: string) {
  const lines = csvString.split('\n');
  const result: (string | number | Date | boolean | null)[] = [];

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

/**
 * Parses a string value into a number, date, boolean or string.
 * Returns null if empty.
 * @param value 
 */
function parseValue(value: string): string | number | Date | boolean {

  const numValue = Number(value);
  if (!isNaN(numValue)) {
    return numValue; // Numeric value
  }

  const dateValue = new Date(value);
  if (!isNaN(dateValue.getTime())) {
    return dateValue; // Date value
  }

  if (value.toLowerCase() === 'true') {
    return true; // Boolean value: true
  }

  if (value.toLowerCase() === 'false') {
    return false; // Boolean value: false
  }

  return value; // String value if no other type applies
}


/* Examples */

let csv = "2, TRUE, John";
console.log(parseCSV(csv)); // [2, true, "John"]
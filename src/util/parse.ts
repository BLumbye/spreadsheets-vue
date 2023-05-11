/**
 * Parses a string value into a number, date, boolean or string.
 * Returns null if empty.
 * @param value 
 */
export function parseValue(value: string): string | number | Date | boolean | null {
  if (value === '') {
    return null; // Empty value or null
  }

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
import transpose from '../util/transpose';

interface ListToCsvOptions {
  header?: string;
  direction?: 'vertical' | 'horizontal';
}

/**
 * Converts a list to a CSV string
 * The data is vertically sorted by default.
 * You can use ${ListToCsvOptions} to add a header, if one is not present, and to horizontally arrange the data.
 *  @param list An array to be converted to CSV.
 *  @param ListToCsvOptions (optional) Whether to append the CSV file with a header and whether to arrange the data horizontally. Default is vertically.
 */
export function listToCsv(list: unknown[], options?: ListToCsvOptions): string {
  return (options?.header ? [options.header, ...list] : list).join(options?.direction === 'horizontal' ? ',' : '\n');
}

interface TableToCsvOptions {
  direction?: 'vertical' | 'horizontal';
  nested?: boolean;
  /** The key of the property that contains the group title. Only used if nested is true. */
  groupKey?: string;
}

function isTableNested<T extends Record<keyof T, unknown>>(
  table: T[] | { items: T[]; [key: string]: any }[],
  options?: TableToCsvOptions,
): table is { items: T[]; [key: string]: any }[] {
  if (options?.nested) return options.nested;

  // Try to detect whether the table is nested or not
  for (let row of table) {
    if (
      'items' in row &&
      Array.isArray(row['items']) &&
      row['items'].length > 0 &&
      typeof row['items'][0] === 'object'
    ) {
      return true;
    }
  }

  return false;
}

/**
 * Converts a table to a CSV string.
 * It supports normal tables as well as nested tables, and will try to automatically determine the type, though it can be overwritten through the options.
 * Nested tables must be of the form `{ items: T[], [key: string]: any }[]`.
 * @param table
 * @param headers
 * @param options
 * @returns
 */
export function tableToCsv<T extends Record<keyof T, unknown>>(
  table: T[] | { items: T[]; [key: string]: any }[],
  headers: Record<keyof T, string>,
  options?: TableToCsvOptions,
): string {
  let lines = [];
  lines.push(Object.values(headers));

  if (!isTableNested(table, options)) {
    for (let row of table) {
      lines.push(Object.keys(headers).map((key) => row[key as keyof T]));
    }
  } else {
    for (let group of table) {
      for (let row of group.items) {
        lines.push(
          Object.keys(headers).map((key) =>
            key === options?.groupKey ? group[options.groupKey] : row[key as keyof T],
          ),
        );
      }
    }
  }

  if (options?.direction === 'horizontal') lines = transpose(lines);
  return lines.map((line) => line.join(',')).join('\n');
}

export function saveCsv(csv: string, fileName: string): void {}

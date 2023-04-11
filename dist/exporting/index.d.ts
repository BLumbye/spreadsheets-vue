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
export declare function listToCsv(list: unknown[], options?: ListToCsvOptions): string;
interface TableToCsvOptions {
    direction?: 'vertical' | 'horizontal';
    nested?: boolean;
    /** The key of the property that contains the group title. Only used if nested is true. */
    groupKey?: string;
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
export declare function tableToCsv<T extends Record<keyof T, unknown>>(table: T[] | {
    items: T[];
    [key: string]: any;
}[], headers: Record<keyof T, string>, options?: TableToCsvOptions): string;
export declare function saveCsv(csv: string, fileName: string): void;
export {};

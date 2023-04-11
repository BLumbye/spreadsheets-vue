"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveCsv = exports.tableToCsv = exports.listToCsv = void 0;
const transpose_1 = __importDefault(require("../util/transpose"));
/**
 * Converts a list to a CSV string
 * The data is vertically sorted by default.
 * You can use ${ListToCsvOptions} to add a header, if one is not present, and to horizontally arrange the data.
 *  @param list An array to be converted to CSV.
 *  @param ListToCsvOptions (optional) Whether to append the CSV file with a header and whether to arrange the data horizontally. Default is vertically.
 */
function listToCsv(list, options) {
    return ((options === null || options === void 0 ? void 0 : options.header) ? [options.header, ...list] : list).join((options === null || options === void 0 ? void 0 : options.direction) === 'horizontal' ? ',' : '\n');
}
exports.listToCsv = listToCsv;
/**
 * Converts a table to a CSV string.
 * It supports normal tables as well as nested tables, and will try to automatically determine the type, though it can be overwritten through the options.
 * Nested tables must be of the form `{ items: T[], [key: string]: any }[]`.
 * @param table
 * @param headers
 * @param options
 * @returns
 */
function tableToCsv(table, headers, options) {
    let nested = false;
    if ((options === null || options === void 0 ? void 0 : options.nested) === undefined) {
        // Try to detect whether the table is nested or not
        for (let row of table) {
            if ('items' in row &&
                Array.isArray(row['items']) &&
                row['items'].length > 0 &&
                typeof row['items'][0] === 'object') {
                nested = true;
                break;
            }
        }
    }
    else {
        nested = options.nested;
    }
    let lines = [];
    lines.push(Object.values(headers));
    if (!nested) {
        table = table;
        for (let row of table) {
            lines.push(Object.keys(headers).map((key) => row[key]));
        }
    }
    else {
        table = table;
        for (let group of table) {
            for (let row of group.items) {
                lines.push(Object.keys(headers).map((key) => key === (options === null || options === void 0 ? void 0 : options.groupKey) ? group[options.groupKey] : row[key]));
            }
        }
    }
    if ((options === null || options === void 0 ? void 0 : options.direction) === 'horizontal')
        lines = (0, transpose_1.default)(lines);
    return lines.map((line) => line.join(',')).join('\n');
}
exports.tableToCsv = tableToCsv;
function saveCsv(csv, fileName) { }
exports.saveCsv = saveCsv;

import { describe, it } from 'vitest';
import { parseCSV } from '../src/importing';

describe('parseCSV', () => {
    it('parses a CSV string with string values', ({ expect }) => {
        const csvString = 'John,Doe,Denmark,Jane,Doe,Sweden';
        const result = parseCSV(csvString);
        expect(result).toEqual(['John', 'Doe', 'Denmark', 'Jane', 'Doe', 'Sweden']);
    });

    it('parses a CSV string with number values', ({ expect }) => {
        const csvString = '1,2,3.14,1000';
        const result = parseCSV(csvString);
        expect(result).toEqual([1, 2, 3.14, 1000]);
    });

    it('parses a CSV string with date values', ({ expect }) => {
        const csvString = '2023-05-12,2022-01-01';
        const result = parseCSV(csvString);
        expect(result).toEqual([new Date('2023-05-12'), new Date('2022-01-01')]);
    });

    it('parses a CSV string with boolean values', ({ expect }) => {
        const csvString = 'true,false';
        const result = parseCSV(csvString);
        expect(result).toEqual([true, false]);
    });

    it('parses a CSV string with empty values', ({ expect }) => {
        const csvString = 'John,,Doe, ,';
        const result = parseCSV(csvString);
        expect(result).toEqual(['John', '', 'Doe', '', '']);
    });

    it('parses a CSV string with mixed typed', ({ expect }) => {
        const csvString = 'Denmark, 5.2, true, 2, 2023-05-12';
        const result = parseCSV(csvString);
        expect(result).toEqual(['Denmark', 5.2, true, 2, new Date('2023-05-12')]);
    });
});
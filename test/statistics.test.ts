import { describe, it } from 'vitest';
import { t_test, median, quartiles } from '../src';

describe('t_test', () => {
    it('calculates the t value for a single sample', ({ expect }) => {
        const x = 1;
        const u = 2;
        const s = 3;
        const n = 4;
        const tValue = t_test(x, u, s, n);
        expect(tValue).toBe(-0.6666666666666666);
    });
});

describe('median', () => {
    it('calculates the median of an odd-sized array', ({ expect }) => {
        const arr = [1, 2, 3, 4, 5];
        const medianValue = median(arr);
        expect(medianValue).toBe(3);
    });

    it('calculates the median of an even-sized array', ({ expect }) => {
        const arr = [1, 2, 3, 4, 5, 6];
        const medianValue = median(arr);
        expect(medianValue).toBe(3.5);
    });

    it('returns null for an empty array', ({ expect }) => {
        const arr: number[] = [];
        const medianValue = median(arr);
        expect(medianValue).toBeNull();
    });
});

describe('quartiles', () => {
    it('calculates the quartiles of an odd-sized array', ({ expect }) => {
        const arr = [1, 2, 3, 4, 5];
        const quartilesValue = quartiles(arr);
        expect(quartilesValue).toEqual({ q1: 1.5, q2: 3, q3: 4.5 });
    });

    it('calculates the quartiles of an even-sized array', ({ expect }) => {
        const arr = [1, 2, 3, 4, 5, 6];
        const quartilesValue = quartiles(arr);
        expect(quartilesValue).toEqual({ q1: 2, q2: 3.5, q3: 5 });
    });

    it('returns null for an empty array', ({ expect }) => {
        const arr: number[] = [];
        const quartilesValue = quartiles(arr);
        expect(quartilesValue).toEqual({ q1: null, q2: null, q3: null });
    });
});

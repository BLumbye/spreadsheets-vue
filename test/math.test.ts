import { describe, it } from 'vitest';
import { arrayMean, arraySum } from '../src';

describe('arrayMean', () => {
    it('calculates the mean of the array', ({ expect }) => {
        const arr = [1, 12, 23, 45, 5];
        const mean = arrayMean(arr);
        expect(mean).toBe(17.2);
    });

    it('returns 0 for an empty array', ({ expect }) => {
        const arr: number[] = [];
        const mean = arrayMean(arr);
        expect(mean).toBe(0);
    });
});

describe('arraySum', () => {
    it('calculates the sum of the array', ({ expect }) => {
        const arr = [1, 12, 23, 45, 5];
        const sum = arraySum(arr);
        expect(sum).toBe(86);
    });

    it('returns 0 for an empty array', ({ expect }) => {
        const arr: number[] = [];
        const sum = arraySum(arr);
        expect(sum).toBe(0);
    });
});

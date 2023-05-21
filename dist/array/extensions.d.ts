declare global {
    interface Array<T> {
        /**
         * Counts the number of elements in the array that match the given predicate.
         * @param predicate The predicate to match.
         * @example ```typescript
         * [1, 2, 3].count((element: number) => element >= 2); // 2
         * ```
         */
        count(predicate: (element: T) => boolean): number;
    }
}
export {};

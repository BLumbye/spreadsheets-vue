declare global {
    interface Array<T> {
        /**
         * Counts the number of elements in the array that match the given predicate.
         * @param predicate The predicate to match.
         */
        count(predicate: (element: T) => boolean): number;
    }
}
export {};

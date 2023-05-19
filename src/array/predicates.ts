declare global {
  interface Array<T> {
    /**
     * Counts the number of elements in the array that match the given predicate.
     * @param predicate The predicate to match.
     */
    count(predicate: (element: T) => boolean): number;
  }
}

if (!Array.prototype.count) {
  Array.prototype.count = function count<T>(this: T[], predicate: (element: T) => boolean): number {
    return this.reduce((count, element) => count + (predicate(element) ? 1 : 0), 0);
  };
}

/**
 * Inverts any given predicate, e.g. `not(isEmpty())` matches any element that is not empty.
 * @param predicate The predicate to invert.
 */
export const not = (predicate: (element: any) => boolean) => (element: any) => !predicate(element);

/**
 * A predicate that sees if an element is empty. To be used together with array functions, such as `count` or `filter`.
 */
export const emptyElements = () => (element: any) => {
  return element === null || element === undefined || element === '';
};

/**
 * A predicate that sees if an element is an exact match. To be used together with array functions, such as `count` or `filter`.
 */
export const exactMatch = (value: any) => (element: any) => {
  return element === value;
};

/**
 * A predicate that sees if an elements type is the same as another. To be used together with array functions, such as `count` or `filter`.
 */
export const typeMatch = (value: any) => (element: any) => {
  return typeof element === typeof value;
};

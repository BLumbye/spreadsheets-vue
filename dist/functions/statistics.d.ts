/**
 * Calculates the true difference between two given group means using the ratio of the difference in the group means over the pooled standard error of the groups.
 * @param x1 Mean of group 1.
 * @param x2 Mean of group 2.
 * @param s Standard error.
 * @param n1 Number of observations in group 1.
 * @param n2 Number of observations in group 2.
 * @returns The t value. A larger value indicates a more significant difference between the groups.
 */
export declare function t_test(x1: number, x2: number, s: number, n1: number, n2: number): number;

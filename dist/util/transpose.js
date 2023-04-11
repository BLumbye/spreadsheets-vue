"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transpose(matrix) {
    return matrix[0].map((_, i) => matrix.map((row) => row[i]));
}
exports.default = transpose;

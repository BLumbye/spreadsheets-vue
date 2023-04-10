"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = __importDefault(require("./math"));
const statistics_1 = __importDefault(require("./statistics"));
exports.default = Object.assign(Object.assign({}, math_1.default), statistics_1.default);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const article_1 = __importDefault(require("./article"));
const image_1 = __importDefault(require("./image"));
exports.default = {
    Article: article_1.default,
    Image: image_1.default
};

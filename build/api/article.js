"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
// 默认文章
router.get('/article/index', (req, res) => {
    res.send('ok');
});
// ai生成文章及问答
router.get('/article/ai', (req, res) => {
});
exports.default = router;

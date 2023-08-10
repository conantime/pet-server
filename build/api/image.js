"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const image_1 = __importDefault(require("../services/image"));
const router = express_1.default.Router();
// ai生成文章及问答
router.get('/image/ai', (req, res) => {
    image_1.default.requestImage({});
});
exports.default = router;

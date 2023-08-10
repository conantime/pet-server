"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const requestHelp_1 = __importDefault(require("../utils/requestHelp"));
const config_1 = __importDefault(require("../utils/config"));
const FormData = require('form-data');
const fs = require('fs');
let imgD;
fs.readFile('./assets/a.jpeg', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        imgD = data;
    }
});
class ImageService {
    constructor() {
    }
    requestImage(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const form = new FormData();
            form.append('image_file', imgD);
            try {
                const res = requestHelp_1.default.post(`${config_1.default.getConfig()['url']}/remove-text/v1`, form);
                // console.log(123)
                // console.log(res)
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
const imgSer = new ImageService();
exports.default = imgSer;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const request = require('request');
const req = {
    get: (link, data) => {
    },
    post: (link, data) => {
        return request({
            url: link,
            method: 'POST',
            json: true,
            headers: {
                "content-type": "application/json",
                "x-api-key": config_1.default.getConfig().base['api-key']
            },
            body: JSON.stringify(data)
        }, function (error, resp, body) {
            if (resp) {
                console.log(resp);
                return new Promise((resolve, reject) => {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(resp);
                    }
                });
            }
        });
    }
};
exports.default = req;

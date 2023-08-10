"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yaml = require('js-yaml');
const fs = require('fs');
class Config {
    constructor() {
    }
    getConfig() {
        try {
            return yaml.load(fs.readFileSync('config/config.yaml', 'utf-8'));
        }
        catch (e) {
            console.log(e);
        }
    }
}
const conf = new Config();
exports.default = conf;

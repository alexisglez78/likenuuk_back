"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
class Server {
    constructor() {
        this.port = PORT;
        this.app = express_1.default();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    start(callback) {
        this.app.listen(this.port, callback());
    }
}
exports.default = Server;

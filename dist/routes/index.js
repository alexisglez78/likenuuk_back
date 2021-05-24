"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mascota_1 = __importDefault(require("./mascota"));
const app = express_1.Router();
app.use('/', mascota_1.default);
exports.default = app;

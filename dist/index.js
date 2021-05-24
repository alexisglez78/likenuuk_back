"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./classes/Server"));
const cors_1 = __importDefault(require("cors"));
const PORT = 3000;
const index_1 = __importDefault(require("./routes/index"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const server = Server_1.default.instance;
server.app.use(cors_1.default());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use(express_1.default.static('public'));
server.app.use('/', index_1.default);
server.start(() => {
    console.log('servidor corriendo en ' + PORT);
});

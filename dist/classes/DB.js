"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const util_1 = __importDefault(require("util"));
class DB {
    constructor() {
        this.DBNa = mysql2_1.default.createPool({
            host: 'priceless-meitner.74-208-244-104.plesk.page',
            user: 'mascotas',
            password: 'xXp3p77%',
            port: 3306,
            connectionLimit: 1000,
            connectTimeout: 60 * 60 * 1000,
            queueLimit: 60 * 60 * 1000,
            database: 'admin_likenuuk'
        });
        this.connection();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    connection() {
        this.DBNa.getConnection((err) => {
            if (err)
                console.log(err);
        });
    }
    async executeQuery(sql, data) {
        let query = await util_1.default.promisify(this.DBNa.query).bind(this.DBNa);
        return await query(sql, data);
    }
}
exports.default = DB;

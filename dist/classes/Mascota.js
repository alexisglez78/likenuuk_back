"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DB_1 = __importDefault(require("./DB"));
class Mascota {
    constructor() {
        this.DBM = DB_1.default.instance;
    }
    async getPet() {
        return await this.DBM.executeQuery("select * from pet", []);
    }
    async editPet(name, species, sex, id, color) {
        return this.DBM.executeQuery("update pet set name = ?, species = ?, sex = ?, color = ? where idpet = ?", [name, species, sex, color, id]);
    }
    async postPet(name, species, sex, color) {
        return this.DBM.executeQuery("insert into pet(name,species,sex,color) values(?,?,?,?)", [name, species, sex, color]);
    }
    async deletePet(id) {
        return this.DBM.executeQuery("delete  from pet where idpet = ?", [id]);
    }
    async search(id) {
        return this.DBM.executeQuery("select * from pet where idpet = ?", [id]);
    }
}
exports.default = Mascota;

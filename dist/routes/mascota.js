"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Mascota_1 = __importDefault(require("../classes/Mascota"));
const app = express_1.Router();
app.get('/pet', async (req, res) => {
    const mascota = new Mascota_1.default();
    let result = await mascota.getPet();
    res.json({
        error: false,
        data: result,
        total: result.length
    });
});
app.put('/pet', async (req, res) => {
    console.log(req.body);
    const re = req.body;
    if (!re.name || !re.id || !re.sex || !re.specie || !re.color) {
        return res.status(422).json({
            error: true,
            message: 'please add all the fields'
        });
    }
    const name = re.name;
    const specie = re.specie;
    const sex = re.sex;
    const id = re.id;
    const color = re.color;
    const mascota = new Mascota_1.default();
    let result = await mascota.editPet(name, specie, sex, id, color);
    if (result.affectedRows > 1) {
        return res.json({
            error: true,
            data: 'Your pet could not be modified please contact the administrator'
        });
    }
    return res.json({
        error: false,
        data: 'successfully modified pet'
    });
});
app.post('/pet', async (req, res) => {
    const re = req.body;
    if (!re.name || !re.sex || !re.specie || !re.color) {
        return res.status(422).json({
            error: true,
            message: 'please add all the fields'
        });
    }
    const name = re.name;
    const specie = re.specie;
    const sex = re.sex;
    const color = re.color;
    const mascota = new Mascota_1.default();
    let result = await mascota.postPet(name, specie, sex, color);
    if (result.affectedRows > 1) {
        return res.json({
            error: true,
            data: 'Your pet could not be inserted please contact the administrator'
        });
    }
    return res.json({
        error: false,
        data: 'successfully inserted pet'
    });
});
app.delete("/pet", async (req, res) => {
    if (!req.query.id) {
        return res.status(422).json({
            error: true,
            message: 'please enter your pets id'
        });
    }
    const id = req.query.id;
    const mascota = new Mascota_1.default();
    let select = await mascota.search(id);
    if (select.length < 1) {
        return res.json({
            error: true,
            data: 'your pet has already been deleted or was not created'
        });
    }
    let result = await mascota.deletePet(id);
    if (result.affectedRows > 1) {
        return res.json({
            error: true,
            data: 'Your pet could not be deleted please contact the administrator'
        });
    }
    return res.json({
        error: false,
        data: 'successfully deleted pet'
    });
});
exports.default = app;

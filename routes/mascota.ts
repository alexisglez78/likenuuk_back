import { Router, Request, Response } from 'express';
import Mascota from '../classes/Mascota';

const app = Router();

app.get('/pet', async (req: Request, res: Response) => {
    const mascota = new Mascota();
    let result = await mascota.getPet();
    res.json({
        error: false,
        data: result,
        total: result.length
    })
});
app.put('/pet', async (req: Request, res: Response) => {
    console.log(req.body)
    const re = req.body;
    if (!re.name || !re.id || !re.sex || !re.specie || !re.color) {
        return res.status(422).json({
            error: true,
            message: 'please add all the fields'
        })
    }
    const name = re.name;
    const specie = re.specie;
    const sex = re.sex;
    const id = re.id;
    const color = re.color;
    const mascota = new Mascota();
    let result = await mascota.editPet(name, specie, sex, id, color);
    if (result.affectedRows > 1) {
        return res.json({
            error: true,
            data: 'Your pet could not be modified please contact the administrator'
        })
    }
    return res.json({
        error: false,
        data: 'successfully modified pet'
    })
});

app.post('/pet', async (req: Request, res: Response) => {
    const re = req.body;
    if (!re.name || !re.sex || !re.specie || !re.color) {
        return res.status(422).json({
            error: true,
            message: 'please add all the fields'
        })
    }
    const name = re.name;
    const specie = re.specie;
    const sex = re.sex;
    const color = re.color;
    const mascota = new Mascota();
    let result = await mascota.postPet(name, specie, sex, color)

    if (result.affectedRows > 1) {
        return res.json({
            error: true,
            data: 'Your pet could not be inserted please contact the administrator'
        })
    }
    return res.json({
        error: false,
        data: 'successfully inserted pet'
    })
});

app.delete("/pet", async (req: Request, res: Response) => {
    if (!req.query.id) {
        return res.status(422).json({
            error: true,
            message: 'please enter your pets id'
        })
    }
    const id: any = req.query.id
    const mascota = new Mascota();
    let select = await mascota.search(id)
    if (select.length < 1) {
        return res.json({
            error: true,
            data: 'your pet has already been deleted or was not created'
        })
    }
    let result = await mascota.deletePet(id);
    if (result.affectedRows > 1) {
        return res.json({
            error: true,
            data: 'Your pet could not be deleted please contact the administrator'
        })
    }
    return res.json({
        error: false,
        data: 'successfully deleted pet'
    })
})
export default app;
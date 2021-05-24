import DB from './DB';

export default class Mascota {

    private DBM: DB;

    constructor() {
        this.DBM = DB.instance;
    }

    async getPet() {
        return await this.DBM.executeQuery("select * from pet", [])
    }
    async editPet(name: string, species: string, sex: string, id: number, color: string) {
        return this.DBM.executeQuery("update pet set name = ?, species = ?, sex = ?, color = ? where idpet = ?", [name, species, sex, color, id])
    }
    async postPet(name: string, species: string, sex: string, color: string) {
        return this.DBM.executeQuery("insert into pet(name,species,sex,color) values(?,?,?,?)", [name, species, sex, color])
    }
    async deletePet(id: number) {
        return this.DBM.executeQuery("delete  from pet where idpet = ?", [id])
    }
    async search(id: number) {
        return this.DBM.executeQuery("select * from pet where idpet = ?", [id])
    }
}
import mysql, { Pool } from 'mysql2';
import util from 'util';

export default class DB{

    private DBNa: Pool;
    private static _instance: DB;

    constructor(){
        this.DBNa = mysql.createPool({   
        host: 'priceless-meitner.74-208-244-104.plesk.page',
        user: 'mascotas',
        password: 'xXp3p77%',
        port: 3306,
        connectionLimit: 1000,
        connectTimeout: 60  *60*  1000,
        queueLimit: 60  *60*  1000,
        database: 'admin_likenuuk'});
        this.connection();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    private connection(){
        this.DBNa.getConnection((err) => {
            if(err) console.log(err);
        })
    }

    async executeQuery(sql: string, data:Array<any>){
        let query:any = await util.promisify(this.DBNa.query).bind(this.DBNa);
        return await query(sql, data);
    }

}
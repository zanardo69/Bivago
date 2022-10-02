
import { CreatePoolSqlServer } from "../../pool.js";
const conexao = await CreatePoolSqlServer();

export class Client{
    constructor(nome, idade, cpf, id){
        this._nome = nome,
        this._idade = idade,
        this._cpf = cpf,
        this._id = id
    }

    static async SelectAll(){
        try {
            const { recordset } = await conexao.query('select * from Cliente')
            return recordset
        } catch (error) {
            console.log("error script ClientModel.js " + error)
            return false
        }
    }

    async Insert(){
       try {
            const { rowsAffected } = await conexao.query(`insert into Cliente values('${ this._nome }',${ this._idade },'${ this._cpf}')`)
            return true
        } catch (error) {
            console.log("error model: " + error)
            return false
        }
    }

    async Update(){
        try {
            const { rowsAffected } = await conexao.query(`update Cliente set nome = '${this._nome}' , idade = ${this._idade}, cpf = '${this._cpf}'  where id = ${this._id}`)
            return rowsAffected
        } catch (error) {
            console.log("error model: " + error)
            return false
        }
    }
}
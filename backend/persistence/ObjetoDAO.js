import ToConect from "./Conection.js";
import Objeto from "../model/Objeto.js";

export default class ObjetoDAO {
    constructor() {
        this.init();
    }

    async init() {
        const connection = await ToConect();
        const sql = `CREATE TABLE IF NOT EXISTS objeto (
            codigo VARCHAR(10) NOT NULL PRIMARY KEY,
            objeto VARCHAR(100) NOT NULL,
            local VARCHAR(100) NOT NULL,
            data DATE NOT NULL,
            nome VARCHAR(100) NOT NULL,
            tiposObjetos_id INT NOT NULL,
            foto VARCHAR(255),
            obs VARCHAR(1000),
            CONSTRAINT fk_objeto FOREIGN KEY (tiposObjetos_id) REFERENCES tiposobjetos(id)
        )`;
        await connection.execute(sql);
        connection.release();
    }


    async insert(obj) {
        if (obj instanceof Objeto) {
            const sql = `INSERT INTO objeto (codigo, objeto, local, data, nome, tiposObjetos_id, foto, obs)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            const values = [
                obj.codigo, obj.objeto, obj.local, obj.data, obj.nome,
                obj.tiposObjetos.id, obj.foto, obj.obs
            ];
            const connection = await ToConect();
            await connection.execute(sql, values);
            connection.release();
        }
    }

    async alter(obj) {
        if (obj instanceof Objeto) {
            const sql = `UPDATE objeto SET objeto = ?, local = ?, data = ?, nome = ?, tiposObjetos_id = ?, foto = ?, obs = ?
                        WHERE codigo = ?`;
            const values = [
                obj.objeto, obj.local, obj.data, obj.nome,
                obj.tiposObjetos.id, obj.foto, obj.obs,
                obj.codigo
            ];
            const connection = await ToConect();
            await connection.execute(sql, values);
            connection.release();
        }
    }

    async delete(obj) {
        if (obj instanceof Objeto) {
            const sql = `DELETE FROM objeto WHERE codigo = ?`;
            const values = [obj.codigo];
            const connection = await ToConect();
            await connection.execute(sql, values);
            connection.release();
        }
    }

    async consult() {
        let list = [];
        const connection = await ToConect();
        const sql = `SELECT o.*, t.tipo FROM objeto o
                    JOIN tiposObjetos t ON o.tiposObjetos_id = t.id`;
        const [rows] = await connection.execute(sql);
        for (let row of rows) {
            const obj = new Objeto(
                row.codigo,
                row.objeto,
                row.local,
                row.data,
                row.nome,
                { id: row.tiposObjetos_id, tipo: row.tipo },
                row.foto,
                row.obs
            );
            list.push(obj);
        }
        connection.release();
        return list;
    }
}

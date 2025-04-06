import ToConect from "./Conection.js";
import TiposObjetos from "../model/TiposObjetos.js";

export default class TiposObjetosDAO {
    async consult() {
        const connection = await ToConect();
        const sql = `SELECT * FROM tiposObjetos`;
        const [rows] = await connection.execute(sql);

        const lista = rows.map(row => new TiposObjetos(row.id, row.tipo));
        connection.release();
        return lista;
    }
}

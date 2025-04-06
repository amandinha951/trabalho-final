/*async consult() {
        let list = [];
        const connection = await ToConect();
        const sql = `SELECT o.*, t.tipo FROM objeto o
                    JOIN tiposObjetos t ON o.tiposObjetos_id = t.id`;
        const [rows] = await connection.execute(sql);
        for (let row of rows) {
            const cidade = new Cidade(row.id_cidade,row.nome_cidade,row.uf_cidade)
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
}*/
import TiposObjetos from "../model/TiposObjetos.js";

export default class TiposObjetosController {

    async consultar(req, res) {
        if (req.method === 'GET') {
            try {
                const tipo = new TiposObjetos();
                const listaTipos = await tipo.consult();
                
                return res.status(200).json({
                    status: true,
                    tipos: listaTipos.map(t => t.toJSON())
                });

            } catch (erro) {
                return res.status(500).json({
                    status: false,
                    mensagem: "Erro ao consultar tipos de objetos!",
                    detalhes: erro.message
                });
            }
        } else {
            return res.status(400).json({
                status: false,
                mensagem: "Requisição inválida. Use o método GET."
            });
        }
    }
}

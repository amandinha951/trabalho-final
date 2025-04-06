import Objeto from "../model/Objeto.js";

export default class ObjetoController {
    async consult(req, res) {
        if (req.method === 'GET') {
            const objeto = new Objeto();
            try {
                const lista = await objeto.consult();
                return res.status(200).json({
                    "status": true,
                    "objeto": lista
                });
            } catch (erro) {
                return res.status(500).json({
                    "status": false,
                    "mensagem": "Erro ao consultar!",
                    "detalhes": erro.message
                });
            }
        } else {
            return res.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida. Consulte a API"
            });
        }
    }

    async insert(req, res) {
        if (req.method === 'POST' && req.is('application/json')) {
            const { codigo, objeto, local, data, nome, tiposObjetos, foto, obs } = req.body;
            if (codigo && objeto && local && data && nome && tiposObjetos && foto && obs) {
                const obj = new Objeto(codigo, objeto, local, data, nome, tiposObjetos, foto, obs);
                try {
                    await obj.insert();
                    return res.status(200).json({
                        "status": true,
                        "mensagem": "Objeto cadastrado com sucesso!"
                    });
                } catch (error) {
                    return res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao cadastrar objeto!",
                        "detalhes": error.message
                    });
                }
            } else {
                return res.status(400).json({
                    "status": false,
                    "mensagem": "Revise os dados enviados!"
                });
            }
        } else {
            return res.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida. Consulte a API"
            });
        }
    }

    async alter(req, res) {
        if ((req.method === 'PUT' || req.method === 'PATCH') && req.is('application/json')) {
            const codigo = req.params.codigo;
            const { objeto, local, data, nome, tiposObjetos, foto, obs } = req.body;
            if (codigo && objeto && local && data && nome && tiposObjetos && foto && obs) {
                const obj = new Objeto(codigo, objeto, local, data, nome, tiposObjetos, foto, obs);
                try {
                    await obj.alter();
                    return res.status(200).json({
                        "status": true,
                        "mensagem": "Objeto alterado com sucesso!"
                    });
                } catch (error) {
                    return res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao alterar objeto!",
                        "detalhes": error.message
                    });
                }
            } else {
                return res.status(400).json({
                    "status": false,
                    "mensagem": "Revise os dados enviados!"
                });
            }
        } else {
            return res.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida. Consulte a API"
            });
        }
    }

    async delete(req, res) {
        if (req.method === 'DELETE') {
            const codigo = req.params.codigo;
            if (codigo) {
                try {
                    const obj = new Objeto();
                    obj.codigo = codigo;
                    await obj.delete();
                    return res.status(200).json({
                        "status": true,
                        "mensagem": "Objeto excluído com sucesso!"
                    });
                } catch (error) {
                    return res.status(500).json({
                        "status": false,
                        "mensagem": "Erro ao excluir objeto!",
                        "detalhes": error.message
                    });
                }
            } else {
                return res.status(400).json({
                    "status": false,
                    "mensagem": "Código do objeto não fornecido!"
                });
            }
        } else {
            return res.status(400).json({
                "status": false,
                "mensagem": "Requisição inválida. Consulte a API"
            });
        }
    }
}

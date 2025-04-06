import TiposObjetosDAO from "../persistence/TiposObjetosDAO.js";

export default class TiposObjetos {
    #id;
    #tipo;

    constructor(id, tipo) {
        this.#id = id;
        this.#tipo = tipo;
    }

    get id() { return this.#id; }
    set id(valor) { this.#id = valor; }

    get tipo() { return this.#tipo; }
    set tipo(valor) { this.#tipo = valor; }

    toJSON() {
        return {
            id: this.#id,
            tipo: this.#tipo
        };
    }

    async consult() {
        const dao = new TiposObjetosDAO();
        return await dao.consult();
    }
}

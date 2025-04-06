import ObjetoDAO from "../persistence/ObjetoDAO.js";

export default class ObjetoEncontrado {
    #codigo
    #objeto
    #local
    #data
    #nome
    #tiposObjetos
    #foto
    #obs

    constructor(codigo, objeto, local, data, nome, tiposObjetos ={}, foto, obs) {
        this.#codigo = codigo
        this.#objeto = objeto
        this.#local = local
        this.#data = data
        this.#nome = nome
        this.#tiposObjetos = tiposObjetos  
        this.#foto = foto
        this.#obs = obs
    }

    // Getters e Setters
    get codigo() { return this.#codigo }
    set codigo(valor) { this.#codigo = valor }

    get objeto() { return this.#objeto }
    set objeto(valor) { this.#objeto = valor }

    get local() { return this.#local }
    set local(valor) { this.#local = valor }

    get data() { return this.#data }
    set data(valor) { this.#data = valor }

    get nome() { return this.#nome }
    set nome(valor) { this.#nome = valor }

    get tiposObjetos() { return this.#tiposObjetos }
    set tiposObjetos(valor) { this.#tiposObjetos = valor }

    get foto() { return this.#foto }
    set foto(valor) { this.#foto = valor }

    get obs() { return this.#obs }
    set obs(valor) { this.#obs = valor }

    toJSON() {
        return {
            "codigo":this.#codigo,
            "objeto": this.#objeto,
            "local": this.#local,
            "data": this.#data,
            "nome": this.#nome,
            "tiposObjetos": {
                "id": this.#tiposObjetos.id,
                "tipo": this.#tiposObjetos.tipo
            },
            "foto":this.#foto,
            "obs": this.#obs
        }
    }

    toString() {
        return `Objeto: ${this.#objeto} - Código: ${this.#codigo}`
    }

    // Métodos de persistência
    async insert() {
        const dao = new ObjetoDAO()
        await dao.insert(this)
    }

    async alter() {
        const dao = new ObjetoDAO()
        await dao.alter(this)
    }

    async delete() {
        const dao = new ObjetoDAO()
        await dao.delete(this)
    }

    async consult() {
        const dao = new ObjetoDAO()
        return await dao.consult()
    }
}

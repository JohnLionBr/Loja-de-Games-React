export default class Cliente{
    #id: number
    #nome: string
    #preço: number
    #score: number
    #jogo: any

    constructor(nome: string, preço: number, id: number, score: number, jogo: any) {
        this.#id = id
        this.#nome = nome
        this.#preço = preço
        this.#score = score
        this.#jogo = jogo
    }

    static vazio() {
        return new Cliente ("", 0, 0, 0, 0 )
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get preço() {
        return this.#preço
    } 

    get score() {
        return this.#score
    } 

    get jogo() {
        return this.#jogo
    } 
}
/**
 * Array<Negociacao> é o mesmo que escrever Negociacao[]
 * ReadonlyArray<Negociacao> é o mesmo que escrever readonly Negociacao[]
 */
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}

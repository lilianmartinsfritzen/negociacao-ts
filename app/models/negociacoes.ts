import { Negociacao } from "./negociacao.js";

/**
 * Array<Negociacao> é o mesmo que escrever Negociacao[]
 * ReadonlyArray<Negociacao> é o mesmo que escrever readonly Negociacao[]
 */
export class Negociacoes {
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  lista(): readonly Negociacao[] {
    return this.negociacoes
  }
}
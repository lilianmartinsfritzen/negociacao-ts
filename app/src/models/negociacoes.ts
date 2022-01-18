import { Negociacao } from "./negociacao.js";

/**
 * Array<Negociacao> é o mesmo que escrever Negociacao[]
 * ReadonlyArray<Negociacao> é o mesmo que escrever readonly Negociacao[]
 */
export class Negociacoes {
  
  private negociacoes: Negociacao[] = [];
  
  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }
  
  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }

  public paraTexto(): string {
    return JSON.stringify(this.negociacoes, null, 2);
  }
  
}
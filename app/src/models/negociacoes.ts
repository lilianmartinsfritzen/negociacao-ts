import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

/**
 * Array<Negociacao> é o mesmo que escrever Negociacao[]
 * ReadonlyArray<Negociacao> é o mesmo que escrever readonly Negociacao[]
 */
export class Negociacoes implements Modelo<Negociacoes> {
  
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
  
  public ehIgual(negociacoes: Negociacoes): boolean {
    return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista())
  }
}
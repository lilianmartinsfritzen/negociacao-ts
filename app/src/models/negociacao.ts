export class Negociacao {
  
  constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ) {}

  public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  /**
   * getTime retorna a data em milissegundos e o construtor de Date conseguirá criar uma data a partir do se time.
   * Desta forma a data que está sendo retornada é identica a data que está ecapsulada dentro da negociação, 
   * porém uma nova referência. Como é preciso retornar uma data de qualquer forma, da maneira abaixo evitamos
   * que qualquer setDate altere a data dentro da negociação.
   */

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public paraTexto(): string {
    return `
      Data: ${this.data},
      Quantidade: ${this.quantidade},
      Valor: ${this.valor}
    `
  }
}
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

/**
 * <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
 * Usamos o formatador nativo do navegador que vai levar em consideração a nacionalidade do usuário.
 * Criamos então uma instância de Intl, que é o namespace para a API de Internacionalização do ECMAScript,
 * chamando seu método estático DateTimeFormat, como não passamos parâmetro ele vai adotar a localidade 
 * padrão do navegador que o usuário está utilizando. Em format() dizemos o que queremos que seja formatado.
 */
export class NegociacoesView extends View<Negociacoes> {

  protected template(model: Negociacoes): string {
    return `
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
          </tr>
          <tbody>
            ${model.lista().map(negociacao => {
              return `
                <tr>
                  <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                  <td>${negociacao.quantidade}</td>
                  <td>${negociacao.valor}</td>
                </tr>
              `
            }).join('')}
          </tbody>
        </thead>
      </table>
    `
  }
}
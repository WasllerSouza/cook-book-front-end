import {NgModule} from '@angular/core';
import {AdicionarProdutoComponent} from "../page/adicionar-produto.component";
import {ADD_PRODUTOS_COMPONENTES} from "./adicionar-produtos.components";
import {ADD_PRODUTOS_PROVIDERS} from "./adicionar-produtos.providers";
import {ADD_PRODUTO_IMPORTS} from "./adicionar-produto.imports";


@NgModule({
  declarations: [...ADD_PRODUTOS_COMPONENTES],
  imports: [...ADD_PRODUTO_IMPORTS],
  providers: [...ADD_PRODUTOS_PROVIDERS],
  exports: [AdicionarProdutoComponent]
})
export class AdicionarProdutoModule {
}

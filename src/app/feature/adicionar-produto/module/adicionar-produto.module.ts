import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdicionarProdutoComponent} from "../page/adicionar-produto.component";
import {StepsModule} from 'primeng/steps';
import {NomeReceitaModule} from "../child/nome-receita/module/nome-receita.module";
import {ToastModule} from "primeng/toast";
import { AdicionarRoutingModule } from './adicionar-routing.module';


@NgModule({
  declarations: [AdicionarProdutoComponent],
  imports: [
    CommonModule,
    NomeReceitaModule,
    ToastModule,
    StepsModule,
    AdicionarRoutingModule
  ], exports: [AdicionarProdutoComponent]
})
export class AdicionarProdutoModule {
}

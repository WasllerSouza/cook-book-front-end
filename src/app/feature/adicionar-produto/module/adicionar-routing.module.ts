import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PerfilComponent} from "../../perfil/page/perfil.component";
import {AdicionarProdutoComponent} from "../page/adicionar-produto.component";

const routes: Routes = [
  {path: 'adicionar', component: AdicionarProdutoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class AdicionarRoutingModule {
}

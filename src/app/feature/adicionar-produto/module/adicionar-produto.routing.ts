import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdicionarProdutoComponent} from "../page/adicionar-produto.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: 'produto', component: AdicionarProdutoComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdicionarProdutoRouting {
}

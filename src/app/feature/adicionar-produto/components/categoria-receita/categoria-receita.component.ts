import {Component} from '@angular/core';
import {ProdutosStore} from "../../store/produtos.store";

@Component({
  selector: 'app-categoria-receita',
  templateUrl: './categoria-receita.component.html',
  styleUrls: ['./categoria-receita.component.scss']
})
export class CategoriaReceitaComponent {
  constructor(public store: ProdutosStore) {
  }

}

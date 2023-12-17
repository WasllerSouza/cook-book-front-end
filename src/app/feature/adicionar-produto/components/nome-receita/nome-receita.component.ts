import {Component} from '@angular/core';
import {ProdutosStore} from "../../store/produtos.store";

@Component({
  selector: 'app-nome-receita',
  templateUrl: './nome-receita.component.html',
  styleUrls: ['./nome-receita.component.scss']
})
export class NomeReceitaComponent {

  constructor(public store: ProdutosStore) {
  }

}

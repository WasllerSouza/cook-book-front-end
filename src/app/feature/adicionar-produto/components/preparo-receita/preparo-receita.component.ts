import {Component} from '@angular/core';
import {ProdutosStore} from "../../store/produtos.store";

@Component({
  selector: 'app-preparo-receita',
  templateUrl: './preparo-receita.component.html',
  styleUrls: ['./preparo-receita.component.scss']
})
export class PreparoReceitaComponent {

  constructor(public store: ProdutosStore) { }

}

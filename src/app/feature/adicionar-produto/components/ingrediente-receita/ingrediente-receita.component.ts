import {Component, OnInit} from '@angular/core';
import {ProdutosStore} from "../../store/produtos.store";
import {ProdutosFacade} from "../../facade/produtos.facade";

@Component({
  selector: 'app-ingrediente-receita',
  templateUrl: './ingrediente-receita.component.html',
  styleUrls: ['./ingrediente-receita.component.scss']
})
export class IngredienteReceitaComponent implements OnInit {

  constructor(public store: ProdutosStore, private facade: ProdutosFacade) {
  }

  ngOnInit(): void {
  }

  adicionar(n: string) {
    this.facade.adicionarIngrediente(n);
  }

  remover() {
    this.facade.removerIngrediente();
  }
}

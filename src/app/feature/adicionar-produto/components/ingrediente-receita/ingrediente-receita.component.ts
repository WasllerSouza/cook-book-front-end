import {Component, OnInit} from '@angular/core';
import {ProdutosStore} from "../../store/produtos.store";
import {ProdutosFacade} from "../../facade/produtos.facade";
import {Ingredientes} from "../../api/model/Produtos.model";

@Component({
  selector: 'app-ingrediente-receita',
  templateUrl: './ingrediente-receita.component.html',
  styleUrls: ['./ingrediente-receita.component.scss']
})
export class IngredienteReceitaComponent implements OnInit {
  valor: boolean = false;

  constructor(public store: ProdutosStore, private facade: ProdutosFacade) {
  }

  ngOnInit(): void {
  }

  adicionar() {
    this.facade.adicionarIngrediente();
  }

  remover() {
    this.facade.removerIngrediente();
  }

  ativador() {
    this.valor = !this.valor
  }

  icone(): string {
    if (this.valor) {
      return ' pi pi-minus-circle'
    }
    return 'pi pi-plus-circle';
  }
}

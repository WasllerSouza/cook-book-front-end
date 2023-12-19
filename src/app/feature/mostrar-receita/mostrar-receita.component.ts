import {Component, Input, OnInit} from '@angular/core';
import {ProdutosFacade} from "../adicionar-produto/facade/produtos.facade";
import {ProdutosStore} from "../adicionar-produto/store/produtos.store";


@Component({
  selector: 'app-mostrar-receita',
  templateUrl: './mostrar-receita.component.html',
  styleUrls: ['./mostrar-receita.component.scss']
})
export class MostrarReceitaComponent implements OnInit{
 @Input() id: number;
constructor(private facade:ProdutosFacade, public store:ProdutosStore) {
}
  ngOnInit(): void {
    this.facade.findProdutoId(this.id);
  }



}

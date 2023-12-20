import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Subscription} from "rxjs";
import {ProdutosFacade} from "../facade/produtos.facade";
import {ProdutosStore} from "../store/produtos.store";

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.scss']
})
export class AdicionarProdutoComponent implements OnInit {

  constructor(private facade: ProdutosFacade, public store: ProdutosStore) {
  }

  ngOnInit(): void {
    this.facade.initComponent();
  }

  onDowngradeIndex() {
    this.facade.onDowngradeIndex();
  }

  onUpdateIndexOrSave() {
    this.facade.onUpdateIndexOrSave();

  }


}

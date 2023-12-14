import { Component, OnInit } from '@angular/core';
import {MenuItem, MessageService} from "primeng/api";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-adicionar-produto',
  templateUrl: './adicionar-produto.component.html',
  styleUrls: ['./adicionar-produto.component.scss']
})
export class AdicionarProdutoComponent implements OnInit {
  items: MenuItem[];
  subscription: Subscription;

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
    this.items = [{}]
  }

}

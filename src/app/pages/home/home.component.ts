import {Component, OnInit} from '@angular/core';
import {Categoria} from "./api/model/categories.model";
import {HomeServiceService} from "./service/home-service.service";
import {ProdutosFacade} from "../../feature/adicionar-produto/facade/produtos.facade";
import {ProdutosStore} from "../../feature/adicionar-produto/store/produtos.store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoria: Categoria;
  categoriaArr: Categoria[];

  constructor(private homeService: HomeServiceService,
              private facade: ProdutosFacade,
              public store: ProdutosStore,
              private router: Router) {
  }

  ngOnInit(): void {
    this.facade.findById();
    this.facade.findAll();
  }

  mudarKey(value: number) {
    this.facade.mudarKey(value);
    this.facade.findById();
  }

  search() {
    this.facade.searchForm();
  }

  navegarReceita(id: number) {
    this.router.navigateByUrl('/receitas/' + id);
  }
}

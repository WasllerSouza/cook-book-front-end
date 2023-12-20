import {Component, Input, OnInit} from '@angular/core';
import {ReceitaStore} from "../../store/receita.store";
import {Router} from "@angular/router";
import {ReceitaFacade} from "../../facade/receita.facade";


@Component({
  selector: 'app-lista-receita',
  templateUrl: './lista-receita.component.html',
  styleUrls: ['./lista-receita.component.scss']
})
export class ListaReceitaComponent implements OnInit {
  @Input() id: number;

  constructor(private facade: ReceitaFacade, public store: ReceitaStore, private router: Router) {
  }

  ngOnInit(): void {
    this.facade.getInitialSearch();
    const search$ = this.store.searchForm.valueChanges;
    this.facade.listenToSearchChanges(search$);
  }

  filtrar(value: number) {
    this.facade.filtrar(value);
  }

  navegarReceita(id: string) {
    this.router.navigateByUrl('/receitas/' + id);
  }


}

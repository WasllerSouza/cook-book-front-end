import {Component, Input, OnInit} from '@angular/core';
import {ReceitaFacade} from "../../facade/receita.facade";
import {ReceitaStore} from "../../store/receita.store";


@Component({
  selector: 'app-mostrar-receita',
  templateUrl: './mostrar-receita.component.html',
  styleUrls: ['./mostrar-receita.component.scss']
})
export class MostrarReceitaComponent implements OnInit {
  @Input() id: string;

  constructor(private facade: ReceitaFacade, public store: ReceitaStore) {
  }

  ngOnInit(): void {
    this.facade.findById(this.id);
  }


}

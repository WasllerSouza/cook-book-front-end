import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-categoria-receita',
  templateUrl: './categoria-receita.component.html',
  styleUrls: ['./categoria-receita.component.scss']
})
export class CategoriaReceitaComponent implements OnInit {
  selectedCategory: any = null;
  categories: any[] = [{name: 'café da manhã', key: 'A'}, {name: 'Almoço', key: 'B'}, {name: 'jantar', key: 'D'}];

  constructor() {
  }

  ngOnInit(): void {
    this.selectedCategory = this.categories[1];
  }

}

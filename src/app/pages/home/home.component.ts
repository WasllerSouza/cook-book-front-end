import {Component, OnInit} from '@angular/core';
import {Categoria} from "./api/model/categories.model";
import {HomeServiceService} from "./service/home-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categoria: Categoria;
  key = 0
  categoriaArr: Categoria[];

  constructor(private homeService: HomeServiceService) {
  }

  ngOnInit(): void {
    this.getAllCategoria()
    this.getCategoria()
  }

  getCategoria() {
    this.categoria = this.homeService.findById(this.key);
  }

  getAllCategoria() {
    this.categoriaArr = this.homeService.getAll();
  }

  mudarKey(value: number) {
    this.key = value;
    this.categoria = this.homeService.findById(this.key);
  }

}

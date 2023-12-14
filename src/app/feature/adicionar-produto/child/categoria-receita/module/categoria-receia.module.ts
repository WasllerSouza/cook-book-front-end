import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoriaReceitaComponent} from "../page/categoria-receita.component";
import {RadioButtonModule} from "primeng/radiobutton";
import {PaginatorModule} from "primeng/paginator";



@NgModule({
  declarations: [CategoriaReceitaComponent],
  imports: [
    CommonModule,
    RadioButtonModule,
    PaginatorModule
  ],
  exports:[CategoriaReceitaComponent]
})
export class CategoriaReceiaModule { }

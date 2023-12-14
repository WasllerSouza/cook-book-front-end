import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IngredienteReceitaComponent} from "../page/ingrediente-receita.component";



@NgModule({
  declarations: [IngredienteReceitaComponent],
  imports: [
    CommonModule
  ],
  exports:[IngredienteReceitaComponent]
})
export class IngredienteReceitaModule { }

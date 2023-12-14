import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PreparoReceitaComponent} from "../page/preparo-receita.component";



@NgModule({
  declarations: [PreparoReceitaComponent],
  imports: [
    CommonModule
  ],
  exports:[PreparoReceitaComponent]
})
export class PreparoReceitaModule { }

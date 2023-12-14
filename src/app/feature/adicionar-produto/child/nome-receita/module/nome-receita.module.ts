import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NomeReceitaComponent} from "../page/nome-receita.component";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [NomeReceitaComponent],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    RippleModule
  ], exports:[NomeReceitaComponent]
})
export class NomeReceitaModule { }

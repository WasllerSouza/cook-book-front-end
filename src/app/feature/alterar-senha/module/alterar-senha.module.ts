import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlterarSenhaComponent} from "../page/alterar-senha.component";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RippleModule} from "primeng/ripple";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";



@NgModule({
  declarations: [AlterarSenhaComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    CardModule
  ],
  exports:[AlterarSenhaComponent]
})
export class AlterarSenhaModule { }

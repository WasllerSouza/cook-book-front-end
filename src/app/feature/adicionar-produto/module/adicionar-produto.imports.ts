import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {StepsModule} from "primeng/steps";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputTextModule} from "primeng/inputtext";
import {AdicionarProdutoRouting} from "./adicionar-produto.routing";
import {ButtonModule} from "primeng/button";
import {InputTextareaModule} from "primeng/inputtextarea";

export const ADD_PRODUTO_IMPORTS = [
  CommonModule,
  ReactiveFormsModule,
  ToastModule,
  StepsModule,
  RadioButtonModule,
  InputTextModule,
  ButtonModule,
  AdicionarProdutoRouting,
  InputTextareaModule
];

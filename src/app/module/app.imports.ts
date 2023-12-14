import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AlertModule} from "../shared/componentes/alerta/alert.module";
import {HttpClientModule} from "@angular/common/http";
import {LoginModule} from "../pages/login/login.module";
import {RegisterModule} from "../pages/register/register.module";
import {AlterarSenhaModule} from "../feature/alterar-senha/module/alterar-senha.module";
import {AdicionarProdutoModule} from "../feature/adicionar-produto/module/adicionar-produto.module";
import {NomeReceitaModule} from "../feature/adicionar-produto/child/nome-receita/module/nome-receita.module";

export const IMPORTS: any[] = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  AlertModule,
  HttpClientModule,
  LoginModule,
  RegisterModule,
  AlterarSenhaModule,
  AdicionarProdutoModule
]

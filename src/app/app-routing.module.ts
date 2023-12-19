import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./pages/register/register.component";
import {PageErrorComponent} from "./shared/page-component/page-error/page-error.component";
import {AlterarSenhaComponent} from "./feature/alterar-senha/page/alterar-senha.component";
import {MostrarReceitaComponent} from "./feature/mostrar-receita/mostrar-receita.component";
import {AuthGuard} from "./core/auth/guard/auth.guard";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {
    path: 'login',
    data: {checkUnauthorized: false},
    component: LoginComponent
  },
  {
    path: 'register',
    data: {checkUnauthorized: false},
    component: RegisterComponent
  },
  {
    path: 'alterar-senha',
    canActivate: [AuthGuard],
    data: {checkUnauthorized: true},
    component: AlterarSenhaComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    data: {checkUnauthorized: true},
    component: HomeComponent
  },
  {
    path: 'receitas/:id',
    canActivate: [AuthGuard],
    data: {checkUnauthorized: true},
    component: MostrarReceitaComponent
  },
  {
    path: 'perfil',
    canActivate: [AuthGuard],
    data: {checkUnauthorized: true},
    loadChildren: async () => (await import('./feature/perfil/module/perfil.module')).PerfilModule
  },
  {
    path: 'adicionar',
    canActivate: [AuthGuard],
    data: {checkUnauthorized: true},
    loadChildren: async () => (await import('./feature/adicionar-produto/module/adicionar-produto.module')).AdicionarProdutoModule
  },

  {path: '**', component: PageErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

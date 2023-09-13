import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./pages/register/register.component";
import {PageErrorComponent} from "./shared/page-component/page-error/page-error.component";
import {AlterarSenhaComponent} from "./feature/alterar-senha/page/alterar-senha.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'alterar-senha',component:AlterarSenhaComponent},
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '',
    data: {
      role: []
    },
    loadChildren: async () => (await import('./feature/perfil/module/perfil.module')).PerfilModule
  },

  {path: '**', component: PageErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

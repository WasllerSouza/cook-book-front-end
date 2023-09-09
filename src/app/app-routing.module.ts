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
    path: 'home', component: HomeComponent, children: [
      {path: '', redirectTo: 'todas', pathMatch: 'full'},
      {
      path: '',
      data: {
        role: []
      },
      loadChildren: async () => (await import('./feature/main/perfil/module/perfil.module')).PerfilModule
    },
      {
        path: '',
        data: {
          role: []

        },
        loadChildren: async () => (await import('./feature/main/manha/module/manha.module')).manhaModule

      },

      {
        path: '',
        data: {
          role: []
        },
        loadChildren: async () => (await import('./feature/main/almoco/module/almoco.module')).AlmocoModule
      },
      {
        path: '',
        data: {
          role: []
        },
        loadChildren: async () => (await import('./feature/main/janta/module/janta.module')).JantaModule
      },
      {
        path: '',
        data: {
          role: []
        },
        loadChildren: async () => (await import('./feature/main/todas/module/todas.module')).TodasModule
      },
      ]
  },
  {path: '**', component: PageErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'home', component: HomeComponent, children: [{
      path: '',
      data: {
        role: []
      },
      loadChildren: async () => (await import('./feature/perfil/module/perfil.module')).PerfilModule
    },
      {
        path: '',
        data: {
          role: []

        },
        loadChildren: async () => (await import('./feature/manha/module/manha.module')).manhaModule

      },
      {
        path: '',
        data: {
          role: []
        },
        loadChildren: async () => (await import('./feature/almoco/module/almoco.module')).AlmocoModule
      },
      {
        path: '',
        data: {
          role: []
        },
        loadChildren: async () => (await import('./feature/janta/module/janta.module')).JantaModule
      },
      {
        path: '',
        data: {
          role: []
        },
        loadChildren: async () => (await import('./feature/todas/module/todas.module')).TodasModule
      }]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

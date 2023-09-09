import { NgModule } from '@angular/core';

import {PerfilComponent} from "../page/perfil.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'perfil', component: PerfilComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }

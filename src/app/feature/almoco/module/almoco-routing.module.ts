import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AlmocoComponent} from "../page/almoco.component";

const routes: Routes = [
  {path: 'almoco', component: AlmocoComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlmocoRoutingModule {
}

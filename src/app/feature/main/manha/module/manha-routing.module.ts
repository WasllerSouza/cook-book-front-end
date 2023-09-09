import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ManhaComponent} from "../page/manha.component";

const routes: Routes = [
  {path: 'manha', component: ManhaComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManhaRoutingModule {
}

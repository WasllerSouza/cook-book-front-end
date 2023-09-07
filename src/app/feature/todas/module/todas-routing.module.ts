import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TodasComponent} from "../page/todas.component";

const routes: Routes = [
  {path: 'todas', component: TodasComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodasRoutingModule { }

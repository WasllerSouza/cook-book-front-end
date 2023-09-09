import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {JantaComponent} from "../page/janta.component";


const routes: Routes = [
  {path: 'janta', component: JantaComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JantaRoutingModule { }

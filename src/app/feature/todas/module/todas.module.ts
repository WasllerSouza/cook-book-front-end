import { NgModule } from '@angular/core';
import { TodasRoutingModule } from './todas-routing.module';
import {TodasComponent} from "../page/todas.component";



@NgModule({
  declarations: [TodasComponent],
  imports: [
    TodasRoutingModule
  ],
  exports:[TodasComponent]
})
export class TodasModule { }

import { NgModule } from '@angular/core';
import {AlmocoComponent} from "../page/almoco.component";
import { AlmocoRoutingModule } from './almoco-routing.module';





@NgModule({
  declarations: [AlmocoComponent],
  imports: [
    AlmocoRoutingModule
  ],
  exports: [AlmocoComponent]
})
export class AlmocoModule { }

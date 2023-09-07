import {NgModule} from '@angular/core';
import {JantaRoutingModule} from './janta-routing.module';
import {JantaComponent} from "../page/janta.component";


@NgModule({
  declarations: [JantaComponent],
  imports: [
    JantaRoutingModule
  ], exports: [JantaComponent]
})
export class JantaModule {
}

import {NgModule} from "@angular/core";
import {ManhaComponent} from "../page/manha.component";
import { ManhaRoutingModule } from './manha-routing.module';


@NgModule({
  declarations: [ManhaComponent],
  imports: [
    ManhaRoutingModule,
  ],
  exports: [ManhaComponent]
})
export class manhaModule {
}

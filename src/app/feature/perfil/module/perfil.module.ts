import {NgModule} from "@angular/core";
import {PerfilComponent} from "../page/perfil.component";
import { PerfilRoutingModule } from './perfil-routing.module';

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    PerfilRoutingModule,
  ],
  exports: [PerfilComponent]
})
export class PerfilModule {
}

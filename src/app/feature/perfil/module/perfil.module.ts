import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {PerfilComponent} from "../page/perfil.component";

@NgModule({
  declarations: [PerfilComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [PerfilComponent]
})
export class PerfilModule {
}

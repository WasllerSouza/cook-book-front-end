import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PROVIDERS} from "./module/app.providers";
import {IMPORTS} from "./module/app.imports";
import {PAGES} from "./module/app.pages";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [...PAGES],
  imports: [...IMPORTS, ReactiveFormsModule],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {
}

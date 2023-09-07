import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PROVIDERS} from "./module/app.providers";
import {IMPORTS} from "./module/app.imports";
import {PAGES} from "./module/app.pages";
import { ManhaComponent } from './feature/manha/manha.component';

@NgModule({
  declarations: [...PAGES, ManhaComponent ],
  imports: [...IMPORTS],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

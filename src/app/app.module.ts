import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {PROVIDERS} from "./module/app.providers";
import {IMPORTS} from "./module/app.imports";
import {PAGES} from "./module/app.pages";
import {PreparoReceitaModule} from "./feature/adicionar-produto/child/preparo-receita/module/preparo-receita.module";


@NgModule({
  declarations: [...PAGES ],
  imports: [...IMPORTS,PreparoReceitaModule],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }

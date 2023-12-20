import {NgModule} from "@angular/core";
import {RECEITA_DECLARATIONS} from "./receita.declaretions";
import {RECEITA_IMPORTS} from "./receita.imports";
import {RECEITA_PROVIDERS} from "./receita.providers";

@NgModule({
  declarations: [...RECEITA_DECLARATIONS],
  imports: [...RECEITA_IMPORTS ],
  providers: [...RECEITA_PROVIDERS],
  exports: [...RECEITA_DECLARATIONS]
})
export class ReceitaModule {
}

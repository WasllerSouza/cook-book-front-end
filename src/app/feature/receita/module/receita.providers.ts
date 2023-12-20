import {ReceitaService} from "../service/receita.service";
import {ReceitaFacade} from "../facade/receita.facade";
import {ReceitaStore} from "../store/receita.store";

export const RECEITA_PROVIDERS = [
  ReceitaService,
  ReceitaStore,
  ReceitaFacade
]

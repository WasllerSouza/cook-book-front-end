import {ProdutosBaseService} from "../service/produtos-base.service";
import {ProdutosService} from "../service/produtos.service";
import {ProdutosStore} from "../store/produtos.store";
import {ProdutosFacade} from "../facade/produtos.facade";
import {MessageService} from "primeng/api";

export const ADD_PRODUTOS_PROVIDERS = [
  {provide: ProdutosBaseService, useClass: ProdutosService},
  ProdutosStore,
  ProdutosFacade,
  MessageService
];

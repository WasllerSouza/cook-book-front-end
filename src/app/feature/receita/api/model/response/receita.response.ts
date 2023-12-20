import {IngredientesResponse} from "./ingredientes.response";
import {CategoriaEnum} from "../../../../adicionar-produto/api/enum/categoria.enum";

export class ReceitaResponse {
  public id: string
  public titulo: string
  public categoria: CategoriaEnum
  public modoPreparo: string
  public ingredientes: IngredientesResponse[]
}

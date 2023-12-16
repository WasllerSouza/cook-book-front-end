import {ApiRoutesHelpers} from "../../../api/api-routes.help";

export const PRODUTOS_API_ROUTES = {
  getProdutos: () => ApiRoutesHelpers.getAbsoluteRoute(''),
  postProdutos: () => ApiRoutesHelpers.getAbsoluteRoute(''),
  putProdutos: () => ApiRoutesHelpers.getAbsoluteRoute(''),
  deleteProdutos: (id: number) => ApiRoutesHelpers.getAbsoluteRoute('/:id')
}

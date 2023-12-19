import {ApiRoutesHelpers} from "../../../api/api-routes.help";

export const HOME_API_ROUTES = {
  getById: () => ApiRoutesHelpers.getAbsoluteRoute('revenue/find'),
  getAll:() => ApiRoutesHelpers.getAbsoluteRoute('revenue/find'),
  searchProduct:() => ApiRoutesHelpers.getAbsoluteRoute('revenue/search')
}

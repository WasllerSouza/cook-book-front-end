import {ApiRoutesHelpers} from "../../../api/api-routes.help";

export const HOME_API_ROUTES = {
  getCategories: (id:number) => ApiRoutesHelpers.getAbsoluteRoute('/:id'),
}

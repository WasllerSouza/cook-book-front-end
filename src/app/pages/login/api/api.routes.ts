import {ApiRoutesHelpers} from "../../../api/api-routes.help";

export const LOGIN_API_ROUTES = {
  login: () => ApiRoutesHelpers.getAbsoluteRoute('user/login'),
  register:() => ApiRoutesHelpers.getAbsoluteRoute('user/register'),
  recorveryPassword:() => ApiRoutesHelpers.getAbsoluteRoute('user/recovery-password')
}

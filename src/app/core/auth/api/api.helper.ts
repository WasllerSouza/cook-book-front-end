import {ApiRoutesHelpers} from "../../../api/api-routes.help";

export const AUTH_URL = {
  validateToken: () => ApiRoutesHelpers.getAbsoluteRoute('/validate-token'),
}

import {environment} from "../../environments/environment";

export class ApiRoutesHelpers {
  public static getAbsoluteRoute(relativeRoute: string): string {
    const host = environment.apiUrl;
    if (relativeRoute === null) return host;

    if (!relativeRoute.startsWith('/') && !host.endsWith('/'))
      relativeRoute = `/${relativeRoute}`;
    else if (relativeRoute.startsWith('/') && host.endsWith('/'))
      relativeRoute = relativeRoute.substring(1, relativeRoute.length);
    return host + relativeRoute;
  }
}

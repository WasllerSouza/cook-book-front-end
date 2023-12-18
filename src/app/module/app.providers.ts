import {AuthTokenInterceptor} from "../shared/interceptor/auth-interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorService} from "../shared/componentes/alerta/services/error.service";
import {UserStore} from "../pages/login/login-store/user.store";
import {UserFacade} from "../pages/login/facade/user.facade";
import {AuthService} from "../core/auth/service/auth.service";
import {AuthGuard} from "../core/auth/guard/auth.guard";
import {CookieService} from "ngx-cookie-service";
import {AuthFacade} from "../core/auth/facade/auth.facade";
import {AuthStore} from "../core/auth/store/auth.store";

export const PROVIDERS: any[] = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true},
  ErrorService,
  UserStore,
  UserFacade,
  AuthService,
  AuthGuard,
  AuthFacade,
  AuthStore,
  CookieService
]

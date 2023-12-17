import {AuthTokenInterceptor} from "../shared/interceptor/auth-interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorService} from "../shared/componentes/alerta/services/error.service";
import {UserStore} from "../pages/login/login-store/user.store";
import {UserFacade} from "../pages/login/facade/user.facade";

export const PROVIDERS: any[] = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true},
  ErrorService,
  UserStore,
  UserFacade
]

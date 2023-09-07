import {AuthTokenInterceptor} from "../shared/interceptor/auth-interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ErrorService} from "../shared/componentes/alerta/services/error.service";

export const PROVIDERS: any[] = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true},
  ErrorService
]

import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../../core/auth/service/auth.service";
import {Injectable} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";
import {ErrorService} from "../componentes/alerta/services/error.service";
import {TypeError} from "../page-component/page-error/enum/type-error.enum";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(
    private _authService: AuthService,
    private _erroService: ErrorService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      setHeaders: {Authorization: `Bearer ${this._authService.getToken()}`},
      withCredentials: true
    })
    return next.handle(authReq).pipe(
      //@ts-ignore
      catchError((err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 401:
              window.location.href = '/login';
              return throwError(() => err);
              break;
            case 404:
              this._erroService.redirectErrorPage(TypeError.NOT_FOUND);
              return throwError(() => err);
              break;
            default:
              return throwError(() => err);
              break;
          }
          if (err.status >= 500) {
            this._erroService.redirectErrorPage(TypeError.INTERNAL_ERROR);
            return throwError(() => err);
          }
        }
      })
    )
  }
}

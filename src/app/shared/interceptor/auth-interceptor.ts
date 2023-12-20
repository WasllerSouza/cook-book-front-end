import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../../core/auth/service/auth.service";
import {Injectable, Input} from "@angular/core";
import {catchError, map, Observable, throwError} from "rxjs";
import {ErrorService} from "../componentes/alerta/services/error.service";
import {TypeError} from "../page-component/page-error/enum/type-error.enum";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthFacade} from "../../core/auth/facade/auth.facade";
import {AuthStore} from "../../core/auth/store/auth.store";

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor(
    private _facade: AuthFacade,
    private _router: Router,
    private store: AuthStore,
    private _erroService: ErrorService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    if (this.store.token) {
      authReq = req.clone({
        setHeaders: {Authorization: `Bearer ${this.store.token}`},
        withCredentials: false
      })
    }
    return next.handle(authReq).pipe(
      //@ts-ignore
      catchError((err: HttpErrorResponse) => {
        if (err instanceof HttpErrorResponse) {
          switch (true) {
            case (err.status === 401):
              this._erroService.showErrorsTyped({
                messageType: 'error',
                message: err.error.errors
              });
              this._router.navigateByUrl('/login');
              break;
            case (err.status === 403):
              this._erroService.redirectErrorPage(TypeError.UNAUTHORIZED);
              break;
            case (err.status === 404):
              this._erroService.redirectErrorPage(TypeError.NOT_FOUND);
              return throwError(() => err);
            case (err.status >= 500):
              this._erroService.redirectErrorPage(TypeError.INTERNAL_ERROR);
              return throwError(() => err);
            default:
              return throwError(() => err);
          }
        }
      })
    )
  }
}

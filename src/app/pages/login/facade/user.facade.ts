import {Injectable} from "@angular/core";
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {GenericResponse} from "../../../api/generic-response";
import {LoginService} from "../service/login.service";
import {UserStore} from "../login-store/user.store";
import {UserModel} from "../api/model/user.model";
import {Router} from "@angular/router";
import {ErrorService} from "../../../shared/componentes/alerta/services/error.service";
import {AuthFacade} from "../../../core/auth/facade/auth.facade";

@Injectable()
export class UserFacade {
  user: UserModel;
  public checked: boolean;

  constructor(
    private loginService: LoginService,
    public userStore: UserStore,
    private _router: Router,
    private _errorService: ErrorService,
    private _auth: AuthFacade,
    ) {
  }

  login(): Observable<any> {
    this.checked = this.userStore.check;
    return of({});

  }

  isLoggedI() {
    this.user = Object.assign({}, this.user, this.userStore.state.LoginForm.value);
    if (this.userStore.state.LoginForm.valid) {
      this.loginService.login(this.user).pipe(
        tap((generic) => {
          this._auth.setCookie(generic.data.LifeTimeInMinutes,  generic.data.Token);
          this.clearForm();
          if(this._auth.checkCookie)
            this._router.navigateByUrl('/home')
        }),
        catchError((err: GenericResponse<any>) => {
          this._errorService.showErrorsTyped({
            messageType: 'error',
            message: err.errors
          })
          return throwError(err);
        })
      ).subscribe();
    } else {
      this._errorService.showErrorsTyped({
        messageType: 'error',
        message: ['Formulário inválido, verifique os campos e tente novamente!']
      })
    }
  }

  clearForm(){
    this.userStore.state.LoginForm.reset({
      email: '',
      senha: '',
      checked: ''
    });
  }

  register() {
    this.user = Object.assign({}, this.user, this.userStore.state.RegisterForm.value);
    if (this.userStore.state.RegisterForm.valid) {
      this.loginService.register(this.user).pipe(
        tap(() => {
          this._errorService.showErrors('registrado com sucesso!')
        }), catchError((err: GenericResponse<any>) => {
          this._errorService.showErrorsTyped({
            messageType: 'error',
            message: err.errors
          })
          return throwError(err);
        })
      ).subscribe();
    }

  }

  recorvery() {
    this.user = Object.assign({}, this.user, this.userStore.state.RecorveryForm.value);
    if (this.userStore.state.RecorveryForm.valid) {
      this.loginService.recorveryPassword(this.user).pipe(
        tap(() => {
          this._errorService.showErrors('Alterado com sucesso!')
        }), catchError((err: GenericResponse<any>) => {
          this._errorService.showErrorsTyped({
            messageType: 'error',
            message: err.errors
          })
          return throwError(err);
        })
      ).subscribe();
    }
  }
}

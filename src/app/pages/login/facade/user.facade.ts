import {Injectable} from "@angular/core";
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {GenericResponse} from "../../../api/generic-response";
import {LoginService} from "../service/login.service";
import {UserStore} from "../login-store/user.store";
import {UserModel} from "../api/model/user.model";
import {Router} from "@angular/router";
import {ErrorService} from "../../../shared/componentes/alerta/services/error.service";
import {AuthFacade} from "../../../core/auth/facade/auth.facade";
import {Validators} from "@angular/forms";

@Injectable()
export class UserFacade {


  constructor(
    private loginService: LoginService,
    public userStore: UserStore,
    private _router: Router,
    private _errorService: ErrorService,
    private _auth: AuthFacade,
  ) {
  }

  login(): Observable<any> {
    this.userStore.state.checked = this.userStore.check;
    return of({});

  }

  isLoggedI() {
    this.userStore.state.user = Object.assign({}, this.userStore.state.user, this.userStore.state.LoginForm.value);
    if (this.userStore.state.LoginForm.valid) {
      this.loginService.login(this.userStore.state.user).pipe(
        tap((generic) => {
          this._auth.setCookie(generic.data.lifeTimeInMinutes,  generic.data.token);
          this.clearForm();
          if (this._auth.checkCookie)
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

  clearForm() {
    this.userStore.state.LoginForm.reset({
      email: '',
      senha: '',
      checked: ''
    });

    this.userStore.state.RegisterForm.reset({
      nome: '',
      email: '',
      senha: '',
      telefone: '',
    });
    this.userStore.state.RecorveryForm.reset({
      senhaAtual: '',
      novaSenha: ''
    });
  }

  register() {
    this.userStore.state.user = Object.assign({}, this.userStore.state.user, this.userStore.state.RegisterForm.value);
    if (this.userStore.state.RegisterForm.valid) {
      this.loginService.register(this.userStore.state.user).pipe(
        tap(() => {
          this._errorService.showErrors('registrado com sucesso!')
          this.clearForm();
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
    this.userStore.state.user = Object.assign({}, this.userStore.state.user, this.userStore.state.RecorveryForm.value);
    if (this.userStore.state.RecorveryForm.valid) {
      this.loginService.recorveryPassword(this.userStore.state.user).pipe(
        tap(() => {
          this._errorService.showErrors('Alterado com sucesso!')
          this.clearForm();
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

import {Component, OnInit} from '@angular/core';
import {catchError, Observable, of, tap, throwError} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserModel} from "./api/model/user.model";
import {ErrorService} from "../../shared/componentes/alerta/services/error.service";
import {LoginService} from "./service/login.service";
import {GenericResponse} from "../../api/generic-response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _fb: FormBuilder,
              private _errorService: ErrorService, private loginService: LoginService) {
  }

  public user: UserModel = new UserModel();
  public loginForm: FormGroup;

  public checked: boolean;

  ngOnInit(): void {
    const $this = this;
    this.loginForm = this._fb.group({
      email: [$this.user.email, Validators.required],
      senha: [$this.user.senha, Validators.required],
      checked: [$this.checked]
    });
  }

  login(): Observable<any> {
    this.checked = this.loginForm.value.checked;

    return of({});

  }

  isLoggedIn() {
    this.user = Object.assign({}, this.user, this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginService.login(this.user).pipe(
        tap(() => {
          this._router.navigate(['/home'])
        }),
        catchError((err:GenericResponse<any>) => {
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

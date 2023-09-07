import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserModel} from "./api/model/user.model";
import {ErrorService} from "../../shared/componentes/alerta/services/error.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _fb: FormBuilder,
              private _errorService: ErrorService) {
  }

  public user: UserModel = new UserModel();
  public loginForm: FormGroup;

  public checked: boolean;

  ngOnInit(): void {
    const $this = this;
    this.loginForm = this._fb.group({
      username: [$this.user.username, Validators.required],
      password: [$this.user.password, Validators.required],
      checked: [$this.checked]
    });
  }

  login(): Observable<any> {
    this.checked = this.loginForm.value.checked;
    this.user = Object.assign({}, this.user, this.loginForm.value);
    return of({});

  }

  isLoggedIn() {
    this.login();
    if (this.user.username === 'user' && this.user.password === '123') {
      this._router.navigate(['home']);
    } else {
      this._errorService.showErrors('testando erro', 'testando erro', 'testando erro', 'testando erro', 'testando erro');
    }

  }

}

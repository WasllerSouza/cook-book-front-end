import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ErrorService} from "../../shared/componentes/alerta/services/error.service";
import {UserModel} from "../login/api/model/user.model";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _router: Router, private _fb: FormBuilder,
              private _errorService: ErrorService) {
  }

  public user: UserModel = new UserModel();
  public registerForm: FormGroup;

  public checked: boolean;

  ngOnInit(): void {
    const $this = this;
    this.registerForm = this._fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): Observable<any> {
    this.checked = this.registerForm.value.checked;
    this.user = Object.assign({}, this.user, this.registerForm.value);
    return of({});
  }

  isLoggedIn() {
    this._errorService.showErrors('testando erro', 'testando erro', 'testando erro', 'testando erro', 'testando erro');
  }

}

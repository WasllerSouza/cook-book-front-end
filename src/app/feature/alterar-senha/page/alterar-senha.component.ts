import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ErrorService} from "../../../shared/componentes/alerta/services/error.service";
import {UserModel} from "../../../pages/login/api/model/user.model";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss']
})
export class AlterarSenhaComponent implements OnInit {

  constructor(private _router: Router, private _fb: UntypedFormBuilder,
              private _errorService: ErrorService) {
  }

  public user: UserModel = new UserModel();
  public loginForm: UntypedFormGroup;

  public checked: boolean;

  ngOnInit(): void {
    const $this = this;
    this.loginForm = this._fb.group({
      username: [$this.user.nome, Validators.required],
      password: [$this.user.senha, Validators.required],
      newPassword: [$this.user.senha, Validators.required],
      checked: [$this.checked]
    });
  }

  login(): Observable<any> {
    this.checked = this.loginForm.value.checked;
    this.user = Object.assign({}, this.user, this.loginForm.value);
    return of({});

  }

  isLoggedIn() {
      this._errorService.showErrors('testando erro', 'testando erro', 'testando erro', 'testando erro', 'testando erro');
    }

}

import { Component, OnInit } from '@angular/core';
import {UserModel} from "../../../../pages/login/api/model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ErrorService} from "../../../../shared/componentes/alerta/services/error.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public user: UserModel = new UserModel();
  public registerForm: FormGroup;

  public checked: boolean;

  constructor(private _router: Router, private _fb: FormBuilder,
              private _errorService: ErrorService) {

  }

  ngOnInit(): void {
    const $this = this;
    this.registerForm = this._fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
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

  deletar() {
    this._errorService.showErrors('deletado com sucesso')
  }
}

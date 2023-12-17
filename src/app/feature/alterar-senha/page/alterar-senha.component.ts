import {Component, OnInit} from '@angular/core';
import {UserStore} from "../../../pages/login/login-store/user.store";
import {UserFacade} from "../../../pages/login/facade/user.facade";

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss']
})
export class AlterarSenhaComponent implements OnInit {

  constructor(public userSore: UserStore, private facade: UserFacade) {
  }

  ngOnInit(): void {
  }

  login() {
    this.facade.login();
  }

  isLoggedIn() {
    this.facade.recorvery();
  }

  protected readonly UserStore = UserStore;
}

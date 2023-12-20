import {Component, OnInit} from '@angular/core';
import {UserStore} from "./login-store/user.store";
import {UserFacade} from "./facade/user.facade";
import {AuthFacade} from "../../core/auth/facade/auth.facade";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public userStore: UserStore, private facade: UserFacade, private _facade: AuthFacade) {
  }


  ngOnInit(): void {
  }

  login() {
   this.facade.login();
  }

  isLoggedIn() {
  this.facade.isLoggedI();
  }

}

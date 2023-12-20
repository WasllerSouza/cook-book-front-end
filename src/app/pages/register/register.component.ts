import {Component, OnInit} from '@angular/core';
import {UserStore} from "../login/login-store/user.store";
import {UserFacade} from "../login/facade/user.facade";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public userSore: UserStore, private facade: UserFacade) {
  }


  ngOnInit(): void {
  }

  login() {
    this.facade.login()
  }

  isLoggedIn() {
    this.facade.register();
  }

}

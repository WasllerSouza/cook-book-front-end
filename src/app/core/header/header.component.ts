import { Component, OnInit } from '@angular/core';
import { ButtonModule} from "primeng/button";
import {AuthFacade} from "../auth/facade/auth.facade";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {AuthStore} from "../auth/store/auth.store";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ButtonModule, RouterLink, RouterLinkActive]
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthFacade, public store: AuthStore) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

}

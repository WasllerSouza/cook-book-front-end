import { Component, OnInit } from '@angular/core';
import { ButtonModule} from "primeng/button";
import {AuthService} from "../auth/service/auth.service";
import {AuthFacade} from "../auth/facade/auth.facade";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ButtonModule]
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthFacade) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
  }

}

import {Component, OnInit} from '@angular/core';
import {ErrorService} from "./shared/componentes/alerta/services/error.service";
import {AuthService} from "./core/auth/service/auth.service";
import {Observable} from "rxjs";
import {UserModel} from "./core/auth/api/model/User.model";
import {AuthStore} from "./core/auth/store/auth.store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public session$: Observable<UserModel>;

  constructor(private errorService: ErrorService, public auth: AuthStore) {
    this.session$ = this.auth.session$;
  }

  ngOnInit(): void {
  }

}

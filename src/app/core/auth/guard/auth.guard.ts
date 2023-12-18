import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree,} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../service/auth.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthGuard {
  constructor(private _service: AuthService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this._service.validate().pipe(map((validate: boolean) => validate ? true : this._router.parseUrl("/login")));
  }
}


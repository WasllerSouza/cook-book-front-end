import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CookieOptions, CookieService} from "ngx-cookie-service";
import {Cookie} from "../api/enum/Cookie.enum";
import {AuthStore} from "../store/auth.store";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {

  constructor(private http: HttpClient,
              private _cookieService: CookieService,
              private authService: AuthService,
              private router: Router,
              private store: AuthStore) {
    this.restoreSession();
  }

  public restoreSession() {
    if (!this.store.token)
      return;

    const session = this.store.user;
    if (!session)
      return;

    this.store.session = session;
  }

  public validate(): Observable<boolean> {
    return this.authService.validate();
  }

  public setCookie(date: string, token: string) {
    const cookieOptions: CookieOptions = {
      path: "/",
      secure: true,
      expires: new Date(date),
    }
    this._cookieService.set(Cookie.AUTH, token, cookieOptions);
    this.restoreSession();
  }

  public logout() {
    this._cookieService.delete(Cookie.AUTH);
    this.store.session = null;
    this.router.navigateByUrl('');
  }
}

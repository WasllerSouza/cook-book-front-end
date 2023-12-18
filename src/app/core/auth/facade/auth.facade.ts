import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {UserModel} from "../api/model/User.model";
import {HttpClient} from "@angular/common/http";
import {CookieOptions, CookieService} from "ngx-cookie-service";
import {Cookie} from "../api/enum/Cookie.enum";
import jwt_decode from "jwt-decode";
import {TokenModel} from "../api/model/token.model";
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

  public get token(): string {
    return this._cookieService.get(Cookie.AUTH);
  }

  public restoreSession() {
    if (!this.token)
      return;

    const session = this.user;
    if (!session)
      return;

    this.store.session = session;
  }

  public get user(): UserModel {
    const decode = jwt_decode<TokenModel>(this.token);
    return {
      email: decode.usuarioEmail,
      nome: decode.nome
    };
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

  public get checkCookie(): boolean {
    return this._cookieService.check(Cookie.AUTH);
  }

  public logout() {
    this._cookieService.delete(Cookie.AUTH);
    this.store.session = null;
    this.router.navigateByUrl('');
  }
}

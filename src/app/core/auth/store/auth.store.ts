import {BehaviorSubject, Observable} from "rxjs";
import {UserModel} from "../api/model/User.model";
import jwt_decode from "jwt-decode";
import {TokenModel} from "../api/model/token.model";
import {Cookie} from "../api/enum/Cookie.enum";
import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";
@Injectable()
export class AuthStore {
  private _session = new BehaviorSubject<UserModel | null>(null);

  constructor(private _cookie: CookieService) {
  }

  public get session$(): Observable<UserModel> {
    return this._session.asObservable();
  }

  public set session(value: UserModel | null){
    this._session.next(value);
  }

  public get user(): UserModel {
    const decode = jwt_decode<TokenModel>(this.token);
    return {
      email: decode.usuarioEmail,
      nome: decode.nome
    };
  }

  public get token(): string {
    return this._cookie.get(Cookie.AUTH);
  }

  public get checkCookie(): boolean {
    return this._cookie.check(Cookie.AUTH);
  }
}
